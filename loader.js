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
      d.style.cssText="position:fixed;top:16px;right:16px;z-index:2147483647;background:#fff;color:#0f172a;padding:10px 14px;border-radius:10px;font:600 13px system-ui,sans-serif;box-shadow:0 10px 25px rgba(15,23,42,.16);border:1px solid #cbd5e1;pointer-events:none;";
      d.textContent=m||"Cargando...";
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
      b.style.cssText="width:100%;text-align:left;padding:10px 12px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;color:#0f172a;font-size:13px;font-weight:600;cursor:pointer;";
      b.textContent=(i+1)+". "+m.nombre;
      b.onclick=()=>{rm("cpModalOverlay");r(m);};
      c.appendChild(b);
    });
    const f=document.createElement("div");
    f.style.cssText="display:flex;justify-content:space-between;margin-top:8px;font-size:12px;";
    const lo=document.createElement("button");
    lo.type="button";
    lo.style.cssText="background:none;border:none;color:#dc2626;font-weight:600;";
    lo.textContent="🔒 Cambiar clave";
    lo.onclick=()=>{rm("cpModalOverlay");r(null);out();};
    const cl=document.createElement("button");
    cl.type="button";
    cl.style.cssText="background:none;border:none;color:#64748b;font-weight:600;";
    cl.textContent="Cerrar";
    cl.onclick=()=>{rm("cpModalOverlay");r(null);};
    f.append(lo,cl);
    c.appendChild(f);
  });
  const pedir=async p=>{
    const q=new URLSearchParams(p).toString(),url=U+(U.includes("?")?"&":"?")+q;
    try{
      const res=await fetch(url,{method:"GET",mode:"cors",credentials:"omit",redirect:"follow"});
      if(!res.ok)throw new Error("HTTP "+res.status);
      const txt=await res.text();
      return JSON.parse(txt.replace(/^[a-zA-Z0-9_$]+\(/,"").replace(/\);?\s*$/,""));
    }catch(e1){
      return new Promise((res,rej)=>{
        const cb="cpCb_"+Date.now()+"_"+Math.floor(Math.random()*1e6);
        const tm=setTimeout(()=>{cln();rej(new Error("Fallo red: "+(e1&&e1.message||"Timeout")));},15000);
        const cln=()=>{clearTimeout(tm);delete window[cb];rm(cb);};
        window[cb]=d=>{cln();res(d);};
        const s=document.createElement("script");
        s.id=cb;
        s.src=su(url+"&callback="+cb);
        s.onerror=()=>{cln();rej(new Error("Bloqueo navegador: "+(e1&&e1.message||"onerror")));};
        document.documentElement.appendChild(s);
      });
    }
  };
  (async()=>{
    try{
      let k=localStorage.getItem("cp_suite_key")||"";
      if(!k){k=await cpUI.texto("Ingresa tu clave de acceso:","","Acceso al sistema");if(!k)return;localStorage.setItem("cp_suite_key",k);}
      let did=localStorage.getItem("cp_device_id")||"";
      if(!did){did=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():"dev_"+Date.now();localStorage.setItem("cp_device_id",did);}
      ld.show("Validando clave y cargando menú...");
      const d=await pedir({accion:"menu",clave:k,deviceId:did});
      ld.hide();
      if(!d||!d.ok){localStorage.removeItem("cp_suite_key");await cpUI.aviso((d&&d.error)||"Error de acceso","⚠️ Acceso denegado");return;}
      if(!d.modulos||!d.modulos.length){await cpUI.aviso("No tienes módulos habilitados.","⚠️ Sin módulos");return;}
      const el=await menu(d,async()=>{localStorage.removeItem("cp_suite_key");await cpUI.aviso("Sesión cerrada.","✅ Sesión cerrada");});
      if(!el)return;
      ld.show("Cargando módulo "+el.nombre+"...");
      const ex=await pedir({accion:"ejecutar",clave:k,modulo:el.id,deviceId:did});
      ld.hide();
      if(!ex||!ex.ok){await cpUI.aviso((ex&&ex.error)||"Error al cargar módulo","⚠️ Error de módulo");return;}
      const AF=Object.getPrototypeOf(async function(){}).constructor;
      await new AF(ex.codigo)();
    }catch(e){
      await cpUI.aviso(e.message,"⚠️ Error");
    }finally{
      ld.hide();
    }
  })();
})();
