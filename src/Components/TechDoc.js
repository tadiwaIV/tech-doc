import React from "react";
import {Container, Row, Col, Button, Card, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const TechDoc = () => (
  <div>
    <Container fluid>
      <Row>
        <Col sm={3} >
          <div id="toc_container" className='sticky-top '>
            <p className="toc_title">JS Documentation</p>
            <ul className="toc_list content">
              <li><a href="#Introduction">Introduction</a>
              </li>
              <li><a href="#What_You_Should_Already_Know">What You Should Already Know</a></li>
              <li><a href="#JavaScript_And_Java">JavaScript &amp; Java </a></li>
              <li><a href="#Hello_World">Hello World</a>
              </li>
              <li><a href="#Variables">Variables</a></li>
              <li><a href="#Declaring_Variables">Declaring Variables</a></li>
              <li><a href="#Variable_Scope">Variable Scope</a>
              </li>
              <li><a href="#Global_Variables">Global Variables</a></li>
              <li><a href="#Constants">Constants</a></li>
              <li><a href="#Data_Types">Data Types</a>
              </li>
              <li><a href="#If_Else_Statement">If...Else Statement</a></li>
              <li><a href="#While_Statement">While Statement</a></li>
              <li><a href="#Function_Declarations">Function Declarations</a>
              </li>
              <li><a href="#Reference">Refernece</a></li>
            </ul>
          </div>
        </Col>
        <Col sm={9} className="main-content">
          <h2 id="Introduction">Introduction</h2>
          <p>
            JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside
            a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to
            provide programmatic control over them.
          </p>
          <p>
            JavaScript contains a standard library of objects, such as Array, Date, and
            Math, and a core set of language elements such as operators, control structures, and statements Core JavaScript can
            be extended for a variety of purposes by supplementing it with additional objects; for example:
          </p>
          <p>
            <ul>
              <li>
                Client-side JavaScript extends the core language by supplying objects to control a browser and its Document
                Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form
                and respond to user events such as mouse clicks, form input, and page navigation.
              </li>
              <li>
                Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server.
                For example, server-side extensions allow an application to communicate with a database, provide continuity of
                information from one invocation to another of the application, or perform file manipulations on a server.
              </li>
            </ul>
          </p>

          <h2 id="What_You_Should_Already_Know">What You Should Already Know</h2>
          <p>
            This guide assumes you have the following basic background:
            <ul>
              <li>
                A general understanding of the Internet and the World Wide Web (WWW).
              </li>
              <li>
                Good working knowledge of HyperText Markup Language (HTML).
              </li>
              <li>
                Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about
                JavaScript.
              </li>
            </ul>
          </p>

          <h2 id="JavaScript_And_Java">JavaScript and Java</h2>
          <p>
            JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language
            resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression
            syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to
            JavaScript.
          </p>
          <p>
            In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on
            a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object
            model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is
            , what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative
            requirements. Functions can be properties of objects, executing as loosely typed methods.
          </p>
          <p>
            JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods.
            You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement
            interfaces. Variables, parameters, and function return types are not explicitly typed.
          </p>

          <h2 id="Hello_World">Hello World</h2>
          <p>
            To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:
          </p>

          <p className="code">
            <code>
              {`function greetMe(yourName) { alert("Hello " + yourName); }`}<br/>
              {`greetMe("World");`}<br/>
            </code>
          </p>

          <h2 id="Variables">Variables</h2>
          <p>
            You use variables as symbolic names for values in your application. The names of variables, called identifiers,
            conform to certain rules.
          </p>
          <p>
            You use variables as symbolic names for values in your application. The names of variables, called identifiers,
            conform to certain rules.A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($);
            subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the
            characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
          </p>
          <p>
            You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape
            sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.
          </p>

          <h2 id="Declaring_Variables">Declaring Variables</h2>
          <p>
            You can declare a variable in three ways:
          </p>
          <p>
            With the keyword var. For example,
          </p>
          <p className="code">
            <code>
              {`var x = 42.`}
            </code>
          </p>
          <p>
            This syntax can be used to declare both local and global variables.
          </p>
          <p>
            By simply assigning it a value. For example,
          </p>
          <p className="code">
            <code>
              {`x = 42.`}
            </code>
          </p>
          <p>
            This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.
          </p>
          <p>
            With the keyword let. For example,
          </p>
          <p className="code">
            <code>
              {`let y = 13.`}
            </code>
          </p>
          <p>
            This syntax can be used to declare a block scope local variable. See Variable scope below.
          </p>

          <h2 id="Variable_Scope">Variable Scope</h2>
          <p>
            When you declare a variable outside of any function, it is called a global variable, because it is available to
            any other code in the current document. When you declare a variable within a function, it is called a local variable,
            because it is available only within that function.
          </p>
          <p>
            JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is
            local to the function (or global scope) that the block resides within. For example the following code will log 5,
            because the scope of x is the function (or global context) within which x is declared, not the block, which in this
            case is an if statement.
          </p>
          <p className="code">
            <code>
              {`if (true) { var x = 5; } console.log(x); // 5`}
            </code>
          </p>
          <p>
            This behavior changes, when using the let declaration introduced in ECMAScript 2015.
          </p>
          <p className="code">
            <code>
              {`if (true) { let y = 5; } console.log(y); // ReferenceError: y is not defined`}
            </code>
          </p>

          <h2 id="Global_Variables">Global Variables</h2>
          <p>
            Global variables are in fact properties of the global object. In web pages the global object is window, so you can
            set and access global variables using the window.variable syntax.
          </p>
          <p>
            Consequently, you can access global variables declared in one window or frame from another window or frame by
            specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you
            can refer to this variable from an iframe as parent.phoneNumber.
          </p>

          <h2 id="Constants">Constants</h2>
          <p>
            You can create a read-only, named constant with the const keyword. The syntax of a constant identifier is the same
            as for a variable identifier: it must start with a letter, underscore or dollar sign and can contain alphabetic,
            numeric, or underscore characters.
          </p>
          <p className="code">
            <code>
              {`const PI = 3.14;`}
            </code>
          </p>
          <p>
            A constant cannot change value through assignment or be re-declared while the script is running. It has to be
            initialized to a value.
          </p>
          <p>
            The scope rules for constants are the same as those for let block scope variables. If the const keyword is omitted, the
            identifier is assumed to represent a variable. You cannot declare a constant with the same name as a function or variable
            in the same scope. For example:
          </p>
          <p className="code">
            <code>
              {`// THIS WILL CAUSE AN ERROR function f() {}; const f = 5;`} <br/>
              {`// THIS WILL CAUSE AN ERROR ALSO function f() { const g = 5; var g;`}
            </code>
          </p>
          <p>
            However, object attributes are not protected, so the following statement is executed without problems.
          </p>
          <p className="code">
            <code>
              {`const MY_OBJECT = {"key": "value"}; MY_OBJECT.key = "otherValue";`}
            </code>
          </p>

          <h2 id="Data_Types">Data Types</h2>
          <p>
            The latest ECMAScript standard defines seven data types:
          </p>
          <p>
            <ul>
              <li>Six data types that are primitives:</li>
              <li className='empty-list'>
                <ul>
                  <li>
                    Boolean. true and false.
                  </li>
                  <li>
                    null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is
                    not the same as Null, NULL, or any other variant.
                  </li>
                  <li>
                    undefined. A top-level property whose value is undefined.
                  </li>
                  <li>
                    Number. 42 or 3.14159.
                  </li>
                  <li>
                    String. "Howdy"
                  </li>
                  <li>
                    Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
                  </li>
                </ul>
              </li>
              <li>
                and Object
              </li>
            </ul>
          </p>
          <p>
            Although these data types are a relatively small amount, they enable you to perform useful functions with your
            applications. Objects and functions are the other fundamental elements in the language. You can think of objects
            as named containers for values, and functions as procedures that your application can perform.
          </p>

          <h2 id="If_Else_Statement">if...else statement</h2>
          <p>
            Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to
            execute a statement if the condition is false. An if statement looks as follows:
          </p>
          <p className="code">
            <code>
              {`if (condition) { statement_1; } else { statement_2; }`}
            </code>
          </p>
          <p>
          condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates
          to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed.
          statement_1 and statement_2 can be any statement, including further nested if statements. You may also compound the
          statements using else if to have multiple conditions tested in sequence, as follows:
          </p>
          <p className="code">
            <code>
              {`if (condition_1) { statement_1; } else if (condition_2) { statement_2;`}<br/>
              {`else if (condition_n) { statement_n; } else { statement_last; }`}
            </code>
          </p>
          <p>
            In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To
            execute multiple statements, group them within a block statement <code> {`({ ... })`} </code> . In general, it's good practice to always
            use block statements, especially when nesting if statements:
          </p>
          <p className="code">
            <code>
              {`if (condition) { statement_1_runs_if_condition_is_true;`}<br/>
              {`statement_2_runs_if_condition_is_true; } else {`}<br/>
              {`statement_3_runs_if_condition_is_false;`}<br/>
              {`statement_4_runs_if_condition_is_false; }`}
            </code>
          </p>
          <p>
            It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused
            with equality when glancing over the code. For example, do not use the following code:
          </p>
          <p className="code">
            <code>
              {`if (x = y) { /* statements here */ }`}
            </code>
          </p>
          <p>
            If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses
            around the assignment. For example:
          </p>
          <p className="code">
            <code>
              {`if ((x = y)) { /* statements here */ }`}
            </code>
          </p>

          <h2 id="While_Statement">While Statement</h2>
          <p>
            A while statement executes its statements as long as a specified condition evaluates to true. A while statement
            looks as follows:
          </p>
          <p className="code">
            <code>
              {`while (condition) statement`}
            </code>
          </p>
          <p>
          If the condition becomes false, statement within the loop stops executing and control passes to the statement
          following the loop. The condition test occurs before statement in the loop is executed. If the condition returns
          true, statement is executed and the condition is tested again. If the condition returns false, execution stops and
          control is passed to the statement following while.
          </p>
          <p>
            To execute multiple statements, use a block statement <code> {`({ ... })`} </code> to group those statements.
          </p>
          <p>
            Example:
          </p>
          <p>
            The following while loop iterates as long as n is less than three:
          </p>
          <p className="code">
            <code>
              {`var n = 0; var x = 0; while (n < 3) { n++; x += n; }`}
            </code>
          </p>
          <p>
            With each iteration, the loop increments n and adds that value to x. Therefore, x and n
            take on the following values:
          </p>
          <p>
            <ul>
              <li>After the first pass: n = 1 and x = 1</li>
              <li>After the second pass: n = 2 and x = 3</li>
              <li>After the third pass: n = 3 and x = 6</li>
            </ul>
          </p>
          <p>
            After completing the third pass, the condition n <code> {`<`} </code> 3 is no longer true, so the loop terminates.
          </p>

          <h2 id="Function_Declarations">Function Declarations</h2>
          <p>
            A function definition (also called a function declaration, or function statement) consists of the function keyword,
            followed by:
          </p>
          <p>
            <ul>
              <li>The name of the function.</li>
              <li>A list of arguments to the function, enclosed in parentheses and separated by commas.</li>
              <li>The JavaScript statements that define the function, enclosed in curly brackets</li>
            </ul>
          </p>
          <p>
            For example, the following code defines a simple function named square:
          </p>
          <p className="code">
            <code>
              {`function square(number) { return number * number; }`}
            </code>
          </p>
          <p>
            The function square takes one argument, called number. The function consists of one statement that says to return
            the argument of the function (that is, number) multiplied by itself. The return statement specifies the value
            returned by the function.
          </p>
          <p className="code">
            <code>
              {`return number * number;`}
            </code>
          </p>
          <p>
            Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but
            if the function changes the value of the parameter, this change is not reflected globally or in the calling function.
          </p>

          <h2 id="Reference">Reference</h2>
          <p>
            <ul>
              <li>
                All the documentation in this page is taken from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">
                MDN</a>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TechDoc;
