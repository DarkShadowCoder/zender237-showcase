import { describe, it, expect } from 'vitest';
import { withdrawalFee } from '../lib/fees';
import { supportSchema } from '../lib/support-schema';
describe('Withdrawal fees from the Zender237 brief', () => {
  it('applies 5% up to and including 50,000 FCFA', () => {
    expect(withdrawalFee(10000)).toEqual({rate: 0.05, fee: 500});
    expect(withdrawalFee(20000)).toEqual({rate: 0.05, fee: 1000});
    expect(withdrawalFee(50000)).toEqual({rate: 0.05, fee: 2500});
  });
  it('applies 3% above 50,000 FCFA without inventing rounding', () => {
    expect(withdrawalFee(50001)?.rate).toBe(0.03);
    expect(withdrawalFee(50001)?.fee).toBeCloseTo(1500.03, 2);
    expect(withdrawalFee(100000)?.fee).toBe(3000);
  });
  it('rejects zero and negative amounts', () => {
    expect(withdrawalFee(0)).toBeNull(); expect(withdrawalFee(-1)).toBeNull();
  });
});
const base = {kind:'deletion', name:'Test', email:'', phone:'', subject:'Suppression', transaction_reference:'', message:'', operation_date:'', amount:null, consent:true, website:''};
it('requires an account phone number for a deletion request', () => {
  expect(supportSchema.safeParse(base).success).toBe(false);
  expect(supportSchema.safeParse({...base, phone:'+237600000000'}).success).toBe(true);
});
it('requires explicit consent for support requests', () => {
  expect(supportSchema.safeParse({...base, phone:'+237600000000', consent:false}).success).toBe(false);
});
