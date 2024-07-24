window.onload = function() {
    document.getElementById("pdv_k_dodaj").addEventListener("click", pdv_kalk_dodaj);
    function pdv_kalk_dodaj(){

        let p, d, v;
        p = document.getElementById("pdv_k_procenat").value;
        d = document.getElementById("pdv_k_osnovica").value;

        v = d / 100 * (Number(p) + 100);
        document.getElementById("pdv_k_ukupno").value = v;
        document.getElementById("pdv_k_dodato").value = v - d;
    }

    document.getElementById("pdv_k_oduzmi").addEventListener("click", pdv_kalk_oduzmi);
    function pdv_kalk_oduzmi(){

        let p, d, v;
        p = document.getElementById("pdv_k_procenat").value;
        v = document.getElementById("pdv_k_ukupno").value;

        d = v * 100 / (Number(p) + 100);
        document.getElementById("pdv_k_osnovica").value = d;
        document.getElementById("pdv_k_dodato").value = v - d;
    }

    document.getElementById("ruc_k_izracunaj").addEventListener("click", ruc_kalk_izracunaj);
    function ruc_kalk_izracunaj(){

        let r, u, c;
        r = document.getElementById("ruc_k_nabavna").value;
        u = document.getElementById("ruc_k_ukupno").value;


        c = u - r;
        document.getElementById("ruc_k_ruc").value = c;
        document.getElementById("ruc_k_posto").value = 100 / r * c;
    }

    document.getElementById("proc_k_dodaj").addEventListener("click", proc_kalkulator_dodaj);
    function proc_kalkulator_dodaj(){

        let p, r, o;

        p = document.getElementById("proc_k_procenat").value;
        r = document.getElementById("proc_k_broj").value;

        o = (r / 100 * (Number(p) + 100)) - r;
        document.getElementById("proc_k_rezultat").value = o;
    }

    document.getElementById("proc_k_oduzmi").addEventListener("click", proc_kalkulator_oduzmi);
    function proc_kalkulator_oduzmi(){

        let p, r, o;

        p = document.getElementById("proc_k_procenat").value;
        r = document.getElementById("proc_k_broj").value;

        o = r - (r * 100 / (Number(p) + 100));
        document.getElementById("proc_k_rezultat").value = o;
    }

    document.getElementById("ic_k_ucm").addEventListener("click", ic_kalkulator_ucm);
    function ic_kalkulator_ucm(){
        
        let i;

        i = document.getElementById("ic_k_inc").value;
        document.getElementById("ic_k_cm").value = i * 2.54;
    }

    document.getElementById("ic_k_uinc").addEventListener("click", ic_kalkulator_uinc);
    function ic_kalkulator_uinc(){
        
        let c;

        c = document.getElementById("ic_k_cm").value;
        document.getElementById("ic_k_inc").value = c / 2.54;
    }

    document.getElementById("fm_k_um").addEventListener("click", fm_kalkulator_m);
    function fm_kalkulator_m(){
        
        let f;

        f = document.getElementById("fm_k_f").value;
        document.getElementById("fm_k_m").value = f * 0.3048;
    }

    document.getElementById("fm_k_uf").addEventListener("click", fm_kalkulator_uf);
    function fm_kalkulator_uf(){
        
        let m;

        m = document.getElementById("fm_k_m").value;
        document.getElementById("fm_k_f").value = m / 0.3048;
    }

    document.getElementById("mm_k_ume").addEventListener("click", mm_kalkulator_me);
    function mm_kalkulator_me(){
        
        let mi;

        mi = document.getElementById("mm_k_mi").value;
        document.getElementById("mm_k_me").value = mi * 1.609344;
    }

    document.getElementById("mm_k_umi").addEventListener("click", mm_kalkulator_mi);
    function mm_kalkulator_mi(){
        
        let me;

        me = document.getElementById("mm_k_me").value;
        document.getElementById("mm_k_mi").value = me / 1.609344;
    }

    document.getElementById("fk_k_ukg").addEventListener("click", fk_kalkulator_ukg);
    function fk_kalkulator_ukg(){
        
        let f;

        f = document.getElementById("fk_k_fu").value;
        document.getElementById("fk_k_kg").value = f * 0.45359237;
    }

    document.getElementById("fk_k_ufu").addEventListener("click", fk_kalkulator_ufu);
    function fk_kalkulator_ufu(){
        
        let k;

        k = document.getElementById("fk_k_kg").value;
        document.getElementById("fk_k_fu").value = k / 0.45359237;
    }

    document.getElementById("gl_k_uli").addEventListener("click", gl_kalkulator_uli);
    function gl_kalkulator_uli(){
        
        let g;

        g = document.getElementById("gl_k_ga").value;
        document.getElementById("gl_k_li").value = g * 3.78541178;
    }

    document.getElementById("gl_k_uga").addEventListener("click", gl_kalkulator_uga);
    function gl_kalkulator_uga(){
        
        let l;

        l = document.getElementById("gl_k_li").value;
        document.getElementById("gl_k_ga").value = l / 3.78541178;
    }
}