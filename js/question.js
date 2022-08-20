


























































var html = [
    {
        q:'1: Which of these elements in HTML can be used for making a text  bol',
        a: '<a>',
        b: '<pre>',
        c: '<br>',
        d: '<b>',
        correct: '<b>'

    },
    {
        q:'2: Which tag do we use in HTML for inserting a line-break?',
        a:'<a>',
        b:'<br>',
        c:'<b>',
        d:'<pre>',
        correct: '<br>'

    },
    {
        q:'3: How to create a hyperlink in HTML?',
        a:'<a link = “www.thinkandlearn.com”> thinkandlearn.com </a>',
        b:'<a> www.thinkandlearn.com <thinkandlearn.com /a>',
        c:'<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>',
        d:'<a url = “www.thinkandlearn.com” thinkandlearn.com /a>',
        correct: '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>'
    },
    {
        q:'4: In HTML, how do we insert an image?',
        a:'<img src = “jtp.png” />',
        b:'<img href = “jtp.png” />',
        c:'<img link = “jtp.png” />',
        d:'<img url = “jtp.png” />',
        correct: '<img src = “jtp.png” />'
    },
    {
        q:'5: Which tag do we use to define the options present in the drop-down selection lists?',
        a:'<list>',
        b:'<option>',
        c:'<dropdown>',
        d:'<select>',
        correct: '<option>'
    },
    {
        q:'6: In HTML, which of these would add a background color?',
        a:'<marquee bgcolor = “plum”>',
        b:'<marquee bg color: “plum”>',
        c:'<marquee color = “plum”>', 
        d:'<marquee bg-color = “plum”>',
        correct: '<marquee bgcolor = “plum”>'
    },
    {
        q:'7: Which HTML tag do we use to display text along with a scrolling effect?',
        a:'<div>',
        b:'<scroll>',
        c:'<marquee>',
        d:'None of the above',
        correct: '<scroll>'
        
    },
    {
        q:'8: In HTML, we use the <hr> tag for ___________.',
        a:'horizontal ruler',
        b:'new line',
        c:'new paragraph',    
        d:'vertical ruler',
        correct: 'horizontal ruler'
    },
    {    
        q:'9: What is the correct way of sending mail in HTML?',
        a:'<mail ab@b</mail>',
        b:'<a href = “ab@b”>',
        c:'<a href = “mailto: ab@b”>',
        d:'None of the above',
        correct:'<a href = “mailto: ab@b”>'
        
    },
    {
        q:'10: In HTML, the tags are __________.',
        a:'in upper case',
        b:'case-sensitive',
        c:'in lowercase',   
        d:'not case sensitive',
        correct: 'not case sensitive'
    }
   ];

   var css = [{
    q:'1: The “color:red” in CSS can be known as _____________:',
    a:'Value',
    b:'Declaration',
    c:'Selector',
    d:'Rule',
    correct:'Declaration',
    },
    {
    q:'2: Which selector do we use to specify the rule for binding some particular unique element?',
    a:'class',
    b:'tag',
    c:'both tag and class',
    d:'id',
    correct:'id',
    },
    {
    q:'3: In an HTML page, which of these tags is used for embedding CSS?',
    a:'<!DOCTYPE html>',
    b:'<css>',
    c:'<style>',
    d:'<script>',
    correct:'<style>',
    },
    {
    q:'4: Which of these functions would convert the color of an element by the filter property to a grey shade, for use?',
    a:'grayscale()',
    b:'shade()',
    c:'brightness()',
    d:'black()',
    correct:'grayscale()',
    },
    {
    q:'5: Which of these functions is the 2D transformation in the matrix format?',
    a:'perspective',
    b:'matrix3d()',
    c:'matrix2d()',
    d:'matrix()',
    correct:'matrix()',
    },
    {
    q:'6: Which one of these is NOT an appropriate value for the font-variant property?',
    a:'small-caps',
    b:'large-caps',
    c:'default',
    d:'inherit',
    correct:'large-caps',
    },
    {
    q:'7: Which value is a slightly bolder weight than the standard bold in the font attribute?',
    a:'dark',
    b:'lighter',
    c:'light',
    d:'emphasize',
    correct:'dark',
    },
    {
    q:'8: The CSS property that is equivalent to the align attribute is:',
    a:'text-align',
    b:'float',
    c:'text-align & float',
    d:'centre',
    correct:'float',
    },
    {
    q:'9: No single, integrated ____________________ specification exists, because it gets split into various separate modules:',
    a:'CSS4',
    b:'CSS3',
    c:'CSS2',
    d:'CSS1',
    correct:'CSS4',
    },
    {
    q:'10: ___________ describes the CSS properties for manipulating the “ruby” position, that are small annotations next to or on top of words, especially common in Japanese and Chinese.',
    a:'text-align',
    b:'lang',
    c:'ruby',
    d:'align',
    correct:'ruby',
    }];

    
   let quizzes = {
        html:html,
        css:css
    };
    
    let quizzesstringified = JSON.stringify(quizzes)
    
   
    localStorage.setItem("quizzes",quizzesstringified)
   