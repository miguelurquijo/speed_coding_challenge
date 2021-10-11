# speed_coding_challenge
My approach to solve the challenges of the Speed Coding Challenge from Toptal 2021

<h1>Introduction</h1>
The Toptal JS Speed Coding Challenge consists of a series of challenges (37) that need to be complete as fast as posible within a 3 minutes window. Every remaining second after all the challenges have been completed will add 10 points.

Using a script to speed up the resolution of the challenge was encourage. 

https://speedcoding.toptal.com/leaderboard?ch=toptal-js-2021


<h1>My Solution</h1>
My approach of solving the challenge was:
<ul>
  <li>I solved all challenges in the speed_challenge.js file.</li>
  <li>I created a csv with two columns, one for the question and one for the answer</li>
  <li>I converted the csv to a Pandas Dataframe using python</li>
  <li>I created a python scrip with Selenium to:</li>
  <ul>
      <li>Get each question from the web page by xpat</li>
      <li>look fot that question in the dataframe previusly created</li>
      <li>Get the answer of that question from the Dataframe</li>
      <li>Clear the textarea in the challenge site</li>
      <li>Paste the answer</li>
      <li>Click teh "next question" button</li>
      <li>Start over</li>
    </ul>
  </ul>

