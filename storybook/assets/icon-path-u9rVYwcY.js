function e(r){const t=r==null?void 0:r.trim();return t?t.startsWith("data:")?{"--icon-path":`url(${t})`}:{"--icon-path":`var(--icon-${t.replace(":","-")})`}:{}}export{e as g};
