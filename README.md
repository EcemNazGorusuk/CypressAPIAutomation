<h1>CypressAPI Automation</h1>

<h2 id="content-overview">Content Overview</h2>
<ul>
  <li><a href="#project-overview">Project Overview</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#running-tests">Running Tests & Results</a></li>
  <li><a href="#tests">Tests</a></li>
  <li><a href="#contributing">Contributing</a></li>
</ul>

<p id="project-overview"><strong>Project Overview</strong></p>
<p><strong>CypressAPI Automation</strong> is a test automation framework developed to test the Petstore API. This project is created using Cypress to automate API tests and verify various endpoints of the API.</p>

<p id="features"><strong>Features</strong></p>
<ul>
  <li><strong>API Tests:</strong> Comprehensive tests for different endpoints of the Petstore API.</li>
  <li><strong>Automation:</strong> Tests are automated using Cypress.</li>
  <li><strong>Easy Configuration:</strong> Easily run your tests with simple configuration.</li>
  <li><strong>Reporting:</strong> Detailed reports of test results are provided.</li>
</ul>

<p id="getting-started"><strong>Getting Started</strong></p>
<p>Follow these steps to get started with this project:</p>

<p id="installation"><strong>Installation</strong></p>
<ol>
  <li>Clone this repository:</li>
  <pre><code>git clone https://github.com/username/CypressAPIAutomation.git</code></pre>
  <li>Navigate to the project directory:</li>
  <pre><code>cd CypressAPIAutomation</code></pre>
  <li>Install the necessary dependencies:</li>
  <pre><code>npm install</code></pre>
</ol>

<p id="running-tests"><strong>Running Tests</strong></p>
<p>You can run the tests using the following command:</p>
<pre><code>npx cypress open</code></pre>
<p>This command will open the Cypress interface, allowing you to run tests manually. Alternatively, you can run the tests from start to finish with the following command:</p>
<pre><code>npx cypress run</code></pre>

<p id="tests"><strong>Tests</strong></p>
<p>Tests are located in the <code>cypress/e2e</code> directory. Each test file contains scenarios that test specific features or endpoints of the API.</p>
<p style="text-align: center; position: relative; line-height: 0;">
  <span style="position: absolute; top: 0; left: 0; margin-right: 10px;">
    Cypress Test Results are:
  </span>
  <a href="https://cloud.cypress.io/projects/1vizwi/runs" style="display: inline-block; vertical-align: top;">
    <img src="https://img.shields.io/badge/Test%20Status-Passed-brightgreen?logo=cypress&logoColor=white&style=for-the-badge" alt="Cypress">
  </a>
</p>



<p id="contributing"><strong>Contributing</strong></p>
<p>If you would like to contribute to this project, please follow these steps:</p>
<ol>
  <li>Make sure to fork this repository.</li>
  <li>Create a new feature branch:</li>
  <pre><code>git checkout -b feature/your-feature</code></pre>
  <li>Make your changes and commit them:</li>
  <pre><code>git commit -am 'Add new feature'</code></pre>
  <li>Push your branch:</li>
  <pre><code>git push origin feature/your-feature</code></pre>
  <li>Create a pull request.</li>
</ol>


