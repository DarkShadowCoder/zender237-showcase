<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared page presentation in ContentPage and global visual tokens in src/styles.css so all informational pages retain a consistent editorial hierarchy.
- Keep progressive scroll and pointer effects in ScrollMotion with cleanup and reduced-motion support so navigation never leaves stale observers or inaccessible hidden content.
