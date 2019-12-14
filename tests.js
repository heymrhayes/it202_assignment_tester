var assignments = [];

/*
 *    evaluate DOM elements and content
 * 
 * 
 */
var assignment = {
name: "homework-1",
document: "some Google Doc URL",
url: "https://heymrhayes.github.io/IT202-mcw-test/",
tests: [
    {id: 'twoParagraphs',
        script: '$("body div#response").find("p").length',
         type: "jQuery elements",
     expectedResult: 2},
    {id: 'paragraphContainingHello',
        script: '$("body div#response").find("p:contains(\'Hello\')").length',
         type: "jQuery elements",
     expectedResult: 1},
    {id: 'addTwo(4,5)',
         type: "javascript function",
        script: 'addTwo(4,5)',
     expectedResult: 9},    
    {id: 'form',
        script: '$("form").length',
     expectedResult: 1}
]}
    
assignments.push(assignment);



/*
 *    evaluate js function
 * 
 * 
 */

assignment = {
name: "homework-2",
document: "some Google Doc URL",
url: "https://cors-anywhere.herokuapp.com/https://simplefunctiontest.davidhayes3.repl.co/",
tests: [
    {id: 'twoParagraphs',
        script: '$("body div#response").find("p").length',
         type: "jQuery elements",
     expectedResult: 2},
    {id: 'paragraphContainingHello',
        script: '$("body div#response").find("p:contains(\'Hello\')").length',
         type: "jQuery elements",
     expectedResult: 1},
    {id: 'paragraphIdParam',
        script: '$("body div#response").find("p[id=\'p1\']").length',
         type: "jQuery elements",
     expectedResult: 1},
    {id: 'addTwo(4,5)',
         type: "javascript function",
        script: 'addTwo(4,5)',
     expectedResult: 9},    
    {id: 'form',
        script: '$("form").length',
     expectedResult: 1}
]}
    
assignments.push(assignment);


/*
 *    evaluate answers to questions
 * 
 * 
 */
assignment = {
name: "homework-3",
document: "some Google Doc URL",
url: "./homework-3.html",
tests: [
    {id: 'question1',
        script: '$("body div#response").find("ol li:eq(0)").text()',
         type: "questionAnswer",
     expectedResult: "HTTP"},
     {id: 'question2',
        script: '$("body div#response").find("ol li:eq(1)").text()',
         type: "questionAnswer",
     expectedResult: "Web Sockets"},
    {id: 'question1',
        script: '$("body div#response").find("ol li:eq(2)").text()',
         type: "questionAnswer",
     expectedResult: "DOM"}
   ]
}   
assignments.push(assignment);


/*
 * 
 * evaluate style rules
 * 
 * 
 */

https://heymrhayes.github.io/it302-financial-firm-app/
assignment = {
name: "homework-4",
document: "some Google Doc URL",
url: "./import.html",
tests: [
    {id: 'bodySelector',
        script: 'checkForStyle(selector="body")',
         type: "style",
     expectedResult: 1},
    {id: 'bodyMargin',
        script: 'checkForStyle(selector="body", property="margin", value="0px")',
         type: "style",
     expectedResult: 3}
   ]
}   
assignments.push(assignment);
    



