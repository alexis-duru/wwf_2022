
const logoHeader = document.querySelectorAll('.logo-header');
let text;
logoHeader.forEach((logo)=>{
    if(logo.getAttribute('id')){
        text = new Blotter.Text("WWF", {
            family : "grandslang",
            size : 45,
            fill : 'black'
        });
    }else{
        text = new Blotter.Text("WWF", {
            family : "grandslang",
            size : 45,
            fill: '#fff'
        });
    }
    var material = new Blotter.FliesMaterial();
        
    var blotter = new Blotter(material, { texts : text });
    material.uniforms.uPointCellWidth.value = 0.02;
    material.uniforms.uPointRadius.value = 0.90;
    material.uniforms.uSpeed.value = 4.5;
    var scope = blotter.forText(text);
    scope.appendTo(logo);

    logo.addEventListener('mouseenter', ()=>{
        material.uniforms.uPointCellWidth.value = 0.05;
    })
    logo.addEventListener('mouseleave', ()=>{
        material.uniforms.uPointCellWidth.value = 0.02;
    })
})
