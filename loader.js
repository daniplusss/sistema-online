(function(){
  const U="https://script.google.com/macros/s/AKfycby8tC6_6bzxYb5GWzyB6NJN5eRsFJtWNsf61XlHrLbeVN4N8dHh0Oj0OJQxVSh612vy/exec";
  let P=null;
  if(window.trustedTypes&&trustedTypes.createPolicy){
    try{P=trustedTypes.createPolicy("cpJsonpPolicy",{createScriptURL:u=>u});}catch(e){}
  }
  const su=u=>P?P.createScriptURL(u):u;
  const rm=id=>{const e=document.getElementById(id);if(e&&e.parentNode)e.parentNode.removeChild(e);};
  const ld={
    show(m){
      this.hide();
      const d=document.createElement("div");
      d.id="cpLoadingToast";
      d.style.cssText="position:fixed;top:16px;right:16px;z-index:2147483647;background:#fff;color:#0f172a;padding:10px 14px;border-radius:10px;font:600 13px system-ui,sans-serif;box-shadow:0 10px 25px rgba(15,23,42,.16);border:1px solid #cbd5e1;display:flex;align-items:center;gap:10px;pointer-events:none;";
      const dot=document.createElement("span");
      dot.style.cssText="width:10px;height:10px;border-radius:999px;background:#2563eb;display:inline-block;flex-shrink:0;";
      const txt=document.createElement("span");
      txt.textContent=m||"Cargando...";
      d.append(dot,txt);
      document.documentElement.appendChild(d);
    },
    hide(){rm("cpLoadingToast");}
  };
  const mod=(t,s,w="380px")=>{
    rm("cpModalOverlay");
    const ov=document.createElement("div");
    ov.id="cpModalOverlay";
    ov.style.cssText="position:fixed;inset:0;z-index:2147483646;background:rgba(15,23,42,.35);display:flex;align-items:center;justify-content:center;padding:16px;font-family:system-ui,sans-serif;";
    const c=document.createElement("div");
    c.style.cssText=`width:100%;max-width:${w};background:#fff;color:#0f172a;border:1px solid #e2e8f0;border-radius:14px;padding:18px;box-shadow:0 20px 45px rgba(15,23,42,.22);max-height:85vh;display:flex;flex-direction:column;gap:8px;overflow-y:auto;`;
    const h=document.createElement("div");
    h.style.cssText="font-size:15px;font-weight:700;";
    h.textContent=t||"";
    c.appendChild(h);
    if(s){
      const m=document.createElement("div");
      m.style.cssText="font-size:12px;color:#64748b;white-space:pre-line;";
      m.textContent=s;
      c.appendChild(m);
    }
    ov.appendChild(c);
    document.documentElement.appendChild(ov);
    return{ov,c};
  };
  const cpUI={
    aviso:(m,t="Aviso")=>new Promise(r=>{
      const{c}=mod(t,m,"360px");
      const b=document.createElement("button");
      b.type="button";
      b.style.cssText="align-self:flex-end;margin-top:8px;padding:8px 16px;border-radius:9px;border:1px solid #2563eb;background:#2563eb;color:#fff;font-size:13px;font-weight:600;cursor:pointer;";
      b.textContent="Aceptar";
      b.onclick=()=>{rm("cpModalOverlay");r(1);};
      c.appendChild(b);
    }),
    confirmar:(m,t="Confirmar")=>new Promise(r=>{
      const{c}=mod(t,m,"380px");
      const f=document.createElement("div");
      f.style.cssText="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;";
      const no=document.createElement("button");
      no.type="button";
      no.style.cssText="padding:8px 14px;border-radius:9px;border:1px solid #cbd5e1;background:#f8fafc;color:#0f172a;font-size:13px;font-weight:600;";
      no.textContent="Cancelar";
      no.onclick=()=>{rm("cpModalOverlay");r(0);};
      const si=document.createElement("button");
      si.type="button";
      si.style.cssText="padding:8px 14px;border-radius:9px;border:1px solid #2563eb;background:#2563eb;color:#fff;font-size:13px;font-weight:600;";
      si.textContent="Aceptar";
      si.onclick=()=>{rm("cpModalOverlay");r(1);};
      f.append(no,si);
      c.appendChild(f);
    }),
    texto:(m,v="",t="Ingresar dato")=>new Promise(r=>{
      const{c}=mod(t,m,"380px");
      const i=document.createElement("input");
      i.type="text";
      i.value=v||"";
      i.style.cssText="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:9px;border:1px solid #cbd5e1;background:#f8fafc;color:#0f172a;font-size:13px;font-weight:600;";
      const f=document.createElement("div");
      f.style.cssText="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;";
      const no=document.createElement("button");
      no.type="button";
      no.style.cssText="padding:8px 14px;border-radius:9px;border:1px solid #cbd5e1;background:#f8fafc;color:#0f172a;font-size:13px;font-weight:600;";
      no.textContent="Cancelar";
      no.onclick=()=>{rm("cpModalOverlay");r(null);};
      const ok=document.createElement("button");
      ok.type="button";
      ok.style.cssText="padding:8px 14px;border-radius:9px;border:1px solid #2563eb;background:#2563eb;color:#fff;font-size:13px;font-weight:600;";
      ok.textContent="Aceptar";
      ok.onclick=()=>{rm("cpModalOverlay");r(i.value.trim());};
      f.append(no,ok);
      c.append(i,f);
      setTimeout(()=>{i.focus();i.select();},10);
    }),
    elegir:(ops,t="Selecciona una opción",s="")=>new Promise(r=>{
      const{c}=mod(t,s,"410px");
      ops.forEach((o,i)=>{
        const b=document.createElement("button");
        b.type="button";
        b.style.cssText="width:100%;text-align:left;padding:10px 12px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;color:#0f172a;font-size:13px;font-weight:600;cursor:pointer;";
        b.textContent=(o.key||i+1)+". "+o.label;
        b.onclick=()=>{rm("cpModalOverlay");r(o);};
        c.appendChild(b);
      });
      const x=document.createElement("button");
      x.type="button";
      x.style.cssText="align-self:flex-end;background:none;border:none;color:#64748b;font-size:12px;font-weight:600;cursor:pointer;";
      x.textContent="Cancelar";
      x.onclick=()=>{rm("cpModalOverlay");r(null);};
      c.appendChild(x);
    })
  };
  window.cpUI=cpUI;
  const menu=(d,out)=>new Promise(r=>{
    const{c}=mod("👤 "+(d.usuario||"Usuario"),"Vigencia: "+(d.vence||"Sin límite"),"360px");
    d.modulos.forEach((m,i)=>{
      const b=document.createElement("button");
      b.type="button";
      b.style.cssText="width:100%;text-align:left;padding:10px 12px;border
