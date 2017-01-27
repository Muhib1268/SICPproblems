function integral(f,a,b,dx) {
   function add_dx(x) {
      return x + dx;
   }
   return sum(f,a + dx / 2,add_dx,b) * dx;
}


function integral(f,a,b,dx) {
   return sum(f,
              a + dx / 2.0,
              function(x) { return x + dx; },
              b)
          *
          dx;
}
integral(cube,0,1,0.01);

integral(cube,0,1,0.001);
