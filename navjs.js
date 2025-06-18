  // function java() {
  //   const j=document.querySelector('#java');
  //   j.classList.add('active');

  //   const p=document.querySelector('#python');
  //   p.classList.remove('active');
  //   const c=document.querySelector('#cpp');
  //   c.classList.remove('active');
  //   const g=document.querySelector('#golang');
  //   g.classList.remove('active');

  // }

  // function pyhton() {
  //   const p=document.querySelector('#python');
  //   p.classList.add('active');

  //   const j=document.querySelector('#java');
  //   j.classList.remove('active');
  //   const c=document.querySelector('#cpp');
  //   c.classList.remove('active');
  //   const g=document.querySelector('#golang');
  //   g.classList.remove('active');

  // }

  // function cpp() {
  //   const c=document.querySelector('#cpp');
  //   c.classList.add('active');

  //   const j=document.querySelector('#java');
  //   j.classList.remove('active');
  //   const p=document.querySelector('#python');
  //   p.classList.remove('active');
  //   const g=documnet.querySelector('#golang');
  //   g.classList.remove('active');

  // }
  // function golang() {
  //   const g=document.querySelector('#golang');
  //   g.classList.add('active');

  //   const j=document.querySelector('#java');
  //   j.classList.remove('active');
  //   const c=document.querySelector('#cpp');
  //   c.classList.remove('active');
  //   const p=document.querySelector('#python');
  //   p.classList.remove('active');

  // }


  
  document.querySelector('#java').addEventListener('click',() =>{
    const j=document.querySelector('#java');
    j.classList.add('active');

    const p=document.querySelector('#python');
    p.classList.remove('active');
    const c=document.querySelector('#cpp');
    c.classList.remove('active');
    const g=document.querySelector('#golang');
    g.classList.remove('active');

  });

  document.querySelector('#python').addEventListener('click',() =>{
    const p=document.querySelector('#python');
    p.classList.add('active');

    const j=document.querySelector('#java');
    j.classList.remove('active');
    const c=document.querySelector('#cpp');
    c.classList.remove('active');
    const g=document.querySelector('#golang');
    g.classList.remove('active');

  });


 document.querySelector('#cpp').addEventListener('click',() =>{
    const c=document.querySelector('#cpp');
    c.classList.add('active');

    const j=document.querySelector('#java');
    j.classList.remove('active');
    const p=document.querySelector('#python');
    p.classList.remove('active');
    const g=document.querySelector('#golang');
    g.classList.remove('active');

  });

  document.querySelector('#golang').addEventListener('click',() =>{
    const g=document.querySelector('#golang');
    g.classList.add('active');

    const j=document.querySelector('#java');
    j.classList.remove('active');
    const c=document.querySelector('#cpp');
    c.classList.remove('active');
    const p=document.querySelector('#python');
    p.classList.remove('active');

  });