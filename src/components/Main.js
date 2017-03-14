import 'styles/App.css'

import React from 'react'
import 'bootstrap'
import 'smartmenus'
import 'smartmenus-bootstrap'

class AppComponent extends React.Component {
  render() {
    document.body.style.paddingTop = '20px';

    return (
      <div className="container">
        <div className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div className="navbar-collapse collapse">

            <ul className="nav navbar-nav">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">A long sub menu <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li className="disabled"><a className="disabled" href="#">Disabled item</a></li>
                          <li><a href="#">One more link</a></li>
                          <li><a href="#">Menu item 1</a></li>
                          <li><a href="#">Menu item 2</a></li>
                          <li><a href="#">Menu item 3</a></li>
                          <li><a href="#">Menu item 4</a></li>
                          <li><a href="#">Menu item 5</a></li>
                          <li><a href="#">Menu item 6</a></li>
                          <li><a href="#">Menu item 7</a></li>
                          <li><a href="#">Menu item 8</a></li>
                          <li><a href="#">Menu item 9</a></li>
                          <li><a href="#">Menu item 10</a></li>
                          <li><a href="#">Menu item 11</a></li>
                          <li><a href="#">Menu item 12</a></li>
                          <li><a href="#">Menu item 13</a></li>
                          <li><a href="#">Menu item 14</a></li>
                          <li><a href="#">Menu item 15</a></li>
                          <li><a href="#">Menu item 16</a></li>
                          <li><a href="#">Menu item 17</a></li>
                          <li><a href="#">Menu item 18</a></li>
                          <li><a href="#">Menu item 19</a></li>
                          <li><a href="#">Menu item 20</a></li>
                          <li><a href="#">Menu item 21</a></li>
                          <li><a href="#">Menu item 22</a></li>
                          <li><a href="#">Menu item 23</a></li>
                          <li><a href="#">Menu item 24</a></li>
                          <li><a href="#">Menu item 25</a></li>
                          <li><a href="#">Menu item 26</a></li>
                          <li><a href="#">Menu item 27</a></li>
                          <li><a href="#">Menu item 28</a></li>
                          <li><a href="#">Menu item 29</a></li>
                          <li><a href="#">Menu item 30</a></li>
                          <li><a href="#">Menu item 31</a></li>
                          <li><a href="#">Menu item 32</a></li>
                          <li><a href="#">Menu item 33</a></li>
                          <li><a href="#">Menu item 34</a></li>
                          <li><a href="#">Menu item 35</a></li>
                          <li><a href="#">Menu item 36</a></li>
                          <li><a href="#">Menu item 37</a></li>
                          <li><a href="#">Menu item 38</a></li>
                          <li><a href="#">Menu item 39</a></li>
                          <li><a href="#">Menu item 40</a></li>
                          <li><a href="#">Menu item 41</a></li>
                          <li><a href="#">Menu item 42</a></li>
                          <li><a href="#">Menu item 43</a></li>
                          <li><a href="#">Menu item 44</a></li>
                          <li><a href="#">Menu item 45</a></li>
                          <li><a href="#">Menu item 46</a></li>
                          <li><a href="#">Menu item 47</a></li>
                          <li><a href="#">Menu item 48</a></li>
                          <li><a href="#">Menu item 49</a></li>
                          <li><a href="#">Menu item 50</a></li>
                          <li><a href="#">Menu item 51</a></li>
                          <li><a href="#">Menu item 52</a></li>
                          <li><a href="#">Menu item 53</a></li>
                          <li><a href="#">Menu item 54</a></li>
                          <li><a href="#">Menu item 55</a></li>
                          <li><a href="#">Menu item 56</a></li>
                          <li><a href="#">Menu item 57</a></li>
                          <li><a href="#">Menu item 58</a></li>
                          <li><a href="#">Menu item 59</a></li>
                          <li><a href="#">Menu item 60</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Another link</a></li>
                      <li><a href="#">One more link</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="bootstrap-navbar.html">Default</a></li>
              <li><a href="bootstrap-navbar-static-top.html">Static top</a></li>
              <li><a href="bootstrap-navbar-fixed-top.html">Fixed top</a></li>
              <li><a href="bootstrap-navbar-fixed-bottom.html">Fixed bottom</a></li>
              <li><a href="#">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">A sub menu <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li className="disabled"><a className="disabled" href="#">Disabled item</a></li>
                      <li><a href="#">One more link</a></li>
                    </ul>
                  </li>
                  <li><a href="#">A separated link</a></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
        <div className="page-header">
          <h1>SmartMenus Bootstrap Addon (Navbar)</h1>
          <p className="lead">Creating zero config advanced Bootstrap 3 navbars with SmartMenus jQuery and the SmartMenus jQuery Bootstrap Addon.</p>
        </div>
        <p>You basically just need to include the JS/CSS files on your Bootstrap 3 powered pages and everything should work automatically including full support for whatever Bootstrap theme you already use. And, of course, you still have the full power and flexibility of SmartMenus jQuery at hand should you need to tweak or customize anything.</p>

        <h2>Source Code</h2>

        <h3>CSS</h3>
        <p>In addition to Bootstrap's CSS just include the SmartMenus jQuery Bootstrap Addon CSS. It's just static CSS code you don't need to edit at all (and probably shouldn't try to).</p>
        <pre dangerouslySetInnerHTML={{__html: `&lt;!-- Bootstrap core CSS -->
&lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">

<span style="color:#419641;">&lt;!-- SmartMenus jQuery Bootstrap Addon CSS -->
&lt;link href="../addons/bootstrap/jquery.smartmenus.bootstrap.css" rel="stylesheet"></span>`}}></pre>

        <h3>HTML</h3>
        <pre dangerouslySetInnerHTML={{__html: `&lt;!-- Navbar -->
&lt;div class="navbar navbar-default" role="navigation">
  &lt;div class="navbar-header">
    &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      &lt;span class="sr-only">Toggle navigation&lt;/span>
      &lt;span class="icon-bar">&lt;/span>
      &lt;span class="icon-bar">&lt;/span>
      &lt;span class="icon-bar">&lt;/span>
    &lt;/button>
    &lt;a class="navbar-brand" href="#">Project name&lt;/a>
  &lt;/div>
  &lt;div class="navbar-collapse collapse">

    <span style="color:#419641;">&lt;!-- Left nav -->
    &lt;ul class="nav navbar-nav">
      &lt;li>&lt;a href="#">Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Dropdown &lt;span class="caret">&lt;/span>&lt;/a>
        &lt;ul class="dropdown-menu">
          &lt;li>&lt;a href="#">Action&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#">Another action&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#">Something else here&lt;/a>&lt;/li>
          &lt;li class="divider">&lt;/li>
          &lt;li class="dropdown-header">Nav header&lt;/li>
          &lt;li>&lt;a href="#">Separated link&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#">One more separated link &lt;span class="caret">&lt;/span>&lt;/a>
            &lt;ul class="dropdown-menu">
              &lt;li>&lt;a href="#">Action&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#">Another action&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#">A long sub menu &lt;span class="caret">&lt;/span>&lt;/a>
                &lt;ul class="dropdown-menu">
                  &lt;li>&lt;a href="#">Action&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Something else here&lt;/a>&lt;/li>
                  &lt;li class="disabled">&lt;a class="disabled" href="#">Disabled item&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">One more link&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 1&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 2&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 3&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 4&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 5&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 6&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 7&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 8&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 9&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 10&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 11&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 12&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 13&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 14&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 15&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 16&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 17&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 18&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 19&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 20&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 21&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 22&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 23&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 24&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 25&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 26&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 27&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 28&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 29&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 30&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 31&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 32&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 33&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 34&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 35&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 36&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 37&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 38&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 39&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 40&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 41&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 42&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 43&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 44&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 45&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 46&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 47&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 48&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 49&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 50&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 51&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 52&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 53&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 54&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 55&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 56&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 57&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 58&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 59&lt;/a>&lt;/li>
                  &lt;li>&lt;a href="#">Menu item 60&lt;/a>&lt;/li>
                &lt;/ul>
              &lt;/li>
              &lt;li>&lt;a href="#">Another link&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#">One more link&lt;/a>&lt;/li>
            &lt;/ul>
          &lt;/li>
        &lt;/ul>
      &lt;/li>
    &lt;/ul></span>

    <span style="color:#419641;">&lt;!-- Right nav -->
    &lt;ul class="nav navbar-nav navbar-right">
      &lt;li class="active">&lt;a href="bootstrap-navbar.html">Default&lt;/a>&lt;/li>
      &lt;li>&lt;a href="bootstrap-navbar-static-top.html">Static top&lt;/a>&lt;/li>
      &lt;li>&lt;a href="bootstrap-navbar-fixed-top.html">Fixed top&lt;/a>&lt;/li>
      &lt;li>&lt;a href="bootstrap-navbar-fixed-bottom.html">Fixed bottom&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Dropdown &lt;span class="caret">&lt;/span>&lt;/a>
        &lt;ul class="dropdown-menu">
          &lt;li>&lt;a href="#">Action&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#">Another action&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#">Something else here&lt;/a>&lt;/li>
          &lt;li class="divider">&lt;/li>
          &lt;li class="dropdown-header">Nav header&lt;/li>
          &lt;li>&lt;a href="#">A sub menu &lt;span class="caret">&lt;/span>&lt;/a>
            &lt;ul class="dropdown-menu">
              &lt;li>&lt;a href="#">Action&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#">Another action&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#">Something else here&lt;/a>&lt;/li>
              &lt;li class="disabled">&lt;a class="disabled" href="#">Disabled item&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#">One more link&lt;/a>&lt;/li>
            &lt;/ul>
          &lt;/li>
          &lt;li>&lt;a href="#">A separated link&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/li>
    &lt;/ul></span>

  &lt;/div>&lt;!--/.nav-collapse -->
&lt;/div>`}}></pre>

        <h3>JavaScript</h3>
        <p>In addition to Bootstrap's JavaScript just include SmartMenus jQuery and the SmartMenus jQuery Bootstrap Addon. The default options used in <code>jquery.smartmenus.bootstrap.js</code> should work well for all. However, you can, of course, tweak them if you like.</p>
        <pre dangerouslySetInnerHTML={{__html: `&lt;!-- Bootstrap core JavaScript
================================================== -->
&lt;!-- Placed at the end of the document so the pages load faster -->
&lt;script src="https://code.jquery.com/jquery-1.11.3.min.js">&lt;/script>
&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js">&lt;/script>

<span style="color:#419641;">&lt;!-- SmartMenus jQuery plugin -->
&lt;script type="text/javascript" src="../jquery.smartmenus.js">&lt;/script>

&lt;!-- SmartMenus jQuery Bootstrap Addon -->
&lt;script type="text/javascript" src="../addons/bootstrap/jquery.smartmenus.bootstrap.js">&lt;/script></span>`}}></pre>

        <h2>Quick customization</h2>

        <h3><code>data-*</code> attributes</h3>
        <p>The following <code>data-*</code> attributes can be set to any <code>ul.navbar-nav</code>:</p>
        <ul>
          <li><code>data-sm-options</code> - set any custom options for the SmartMenus jQuery plugin (<a href="http://www.smartmenus.org/docs/#data-sm-options">check the docs</a> for details).</li>
          <li><code>data-sm-skip</code> - this will tell the script to skip this navbar and not apply any SmartMenus features to it so it will behave like a regular Bootstrap navbar.</li>
          <li><code>data-sm-skip-collapsible-behavior</code> - this will tell the script to not apply SmartMenus' specific behavior to this navbar in collapsible mode (mobile view). Bootstrap's behavior for navbars in collapsible mode is to use the whole area of the parent items just as a toggle button for their sub menus and thus it's impossible to set a link to the parent items that can be followed on click/tap. SmartMenus' behavior is to add a separate dedicated +/- sub menus toggle button to parent items and thus allows the link of the parent items to be activated on the second click/tap (the first click/tap displays the sub menu if it's not visible).</li>
        </ul>

        <h3>API</h3>
        <p>The following methods are available:</p>
        <ul>
          <li><code>jQuery.SmartMenus.Bootstrap.init()</code> - reinit the addon. Useful if you add any navbars dynamically on your page and need to init them (all navbars are normally initialized ondomready).</li>
        </ul>

        <hr />

        <ul className="pagination">
          <li><a href="index.html">&laquo; Back to main demo</a></li>
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
