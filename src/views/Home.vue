<template>
    <h1>Home Page</h1>

    <div style="position: relative; animation: myfirst 5s 2; animation-direction: alternate;">
        <h2>Hello World!!!!</h2>
    </div>
</template>

<style>
    h1{
        text-align: center;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: xx-large;
        font-style: italic;
        font-stretch: ultra-expanded;
        border-bottom: 5px solid blue;
    }
    h2{
        text-align: center;
    }
    body{
        background-color: #DCDCDC;
    }
    @keyframes myfirst {
  0%   {left: 0px; top: 0px;}
  25%  {left: 200px; top: 0px;}
  50%  {left: 200px; top: 200px;}
  75%  {left: 0px; top: 200px;}
  100% {left: 0px; top: 0px;}
}
</style>