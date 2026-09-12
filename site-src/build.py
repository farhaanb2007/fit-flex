#!/usr/bin/env python3
"""Stitch partials + pages into the static site folder."""
import re, os, sys, hashlib
SRC = os.path.dirname(os.path.abspath(__file__))
OUT = "/Users/farhaanbaig/fit&flex"
header = open(f"{SRC}/partials/header.html").read()
footer = open(f"{SRC}/partials/footer.html").read()
# cache-bust CSS/JS with a short content hash so browsers never serve a stale stylesheet after a deploy
def ver(path):
    return hashlib.sha1(open(f"{OUT}/{path}", "rb").read()).hexdigest()[:8]
for asset in ("assets/style.css", "assets/site.js", "assets/config.js"):
    v = ver(asset)
    header = header.replace(f'"{asset}"', f'"{asset}?v={v}"')
    footer = footer.replace(f'"{asset}"', f'"{asset}?v={v}"')
for fn in sorted(os.listdir(f"{SRC}/pages")):
    raw = open(f"{SRC}/pages/{fn}").read()
    m = re.match(r"---\n(.*?)\n---\n(.*)", raw, re.S)
    meta = dict(l.split(":", 1) for l in m.group(1).splitlines())
    meta = {k.strip(): v.strip() for k, v in meta.items()}
    body, _, script = m.group(2).partition("---script---")
    title = meta["title"] if meta["title"] == "Fit & Flex" else f'{meta["title"]} | Fit & Flex'
    html = header.replace("{{TITLE}}", title).replace("{{DESC}}", meta["desc"]).replace("{{PAGE}}", meta["page"]) + body + footer.replace("{{PAGE_SCRIPT}}", script.strip())
    for ch in ("—", "–"):
        if ch in html: sys.exit(f"em/en dash found in {fn}")
    open(f"{OUT}/{fn}", "w").write(html)
    print("built", fn, len(html))
