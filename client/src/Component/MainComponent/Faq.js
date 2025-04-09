import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Service() {
  return (
    <div>
    <div className="container ctac bg-dark">
    <h2>Frequentily asked question by companies</h2>
    <div className="bca"> 
      <h3>BCA</h3>   
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.1  What is your strongest programming language (Java, ASP, C, C++, VB, HTML, C#, etc.)? 
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            Point to remember: Before interview You should decide your Favorite programming language and be prepared based on that question.
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.2 Differences between C and Java?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            1.JAVA is Object-Oriented while C is procedural.
            2.Java is an Interpreted language while C is a compiled language.
            3.C is a low-level language while JAVA is a high-level language.
            4.C uses the top-down approach while JAVA uses the bottom-up approach.
            5.Pointer go backstage in JAVA while C requires explicit handling of pointers.
            6.The Behind-the-scenes Memory Management with JAVA &amp; The User-Based Memory Management in C.
            7.JAVA supports Method Overloading while C does not support overloading at all.
            8.Unlike C, JAVA does not support Preprocessors, &amp; does not really them.
            9.The standard Input &amp; Output Functions--C uses the printf &amp; scanf functions as its standard input &amp; output while JAVA uses the System.out.print &amp; System.in.read functions.
            10.Exception Handling in JAVA And the errors &amp; crashes in C.
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.3 In header files whether functions are declared or defined?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            Functions are declared within header file. That is function prototypes exist in a header file,not function bodies. They are defined in library (lib).
          </div>
        </div>
      </div>
    </div>
    <div className="p-0">
      <p>
        <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Q.4 What are the different storage classes in C ?
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          There are four types of storage classes in C. They are extern, register, auto and static
        </div>
      </div>
    </div>
    <div className="p-0">
      <p>
        <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Q.5 What does static variable mean?
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          Static is an access qualifier. If a variable is declared as static inside a function, the scope is limited to the function,but it will exists for the life time of the program. Values will be persisted between successive 
          calls to a functiom
        </div>
      </div>
    </div>
    <div className="p-0">
      <p>
        <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Q.6 .How do you print an address ?
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          Use %p in printf to print the address.
        </div>
      </div>
    </div>
    <div className="p-0">
      <p>
        <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Q.7 What are macros? what are its advantages and disadvantages? 
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          Macros are processor directive which will be replaced at compile time.
          The disadvantage with macros is that they just replace the code they are not function calls. similarly the advantage is they can reduce time for replacing the same values
        </div>
      </div>
    </div>
    <div className="p-0">
      <p>
        <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Q.8 Difference between pass by reference and pass by value? 
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          Pass by value just passes the value from caller to calling function so the called function cannot modify the values in caller function. But Pass by reference will pass the address to the caller function instead of value if called function requires to modify any value it can directly modify.
        </div>
      </div>
    </div>
    <div className="p-0">
      <p>
        <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Q.9 What is an object?
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          Object is a software bundle of variables and related methods. Objects have state and behavior
        </div>
      </div>
    </div>
    <div className="p-0">
      <p>
        <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Q.10 What is ponter?
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          Pointer is a variable in a program is something with a name, the value of which can vary. The way the compiler and linker handles this is that it assigns 
          a specific block of memory within the computer to hold the value of that variable.
        </div>
      </div>
    </div>
    <div className="mca"> 
      <h3>MCA</h3>   
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.1 What is the difference between null and void pointer?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            A Null pointer has the value 0. void pointer is a generic pointer introduced by ANSI. Generic pointer can hold the address of any data type. 
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.2 what is function overloading
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            Function overloadingis a feature of C++ that allows us to create multiple functions with the same name, so long as they have different parameters.Consider the following function:
            int Add(int nX, int nY)
            {'{'}
            return nX + nY;
            {'}'}
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.3 What do you mean by inline function?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            The idea behind inline functions is to insert the code of a called function at the point where the function is called. If done carefully, this can improve the application's performance in exchange for increased compile time and possibly (but not always) an increase in the size of the generated binary executables.
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.4 What is the difference between an array and a list?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center"> 
            Array is collection of homogeneous elements. List is collection of heterogeneous elements.
            For Array memory allocated is static and continuous. For List memory allocated is dynamic and Random.
            Array: User need not have to keep in track of next memory allocation.
            List: User has to keep in Track of next location where memory is allocated.
            Array uses direct access of stored members, list uses sequential access for members.
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.5 what are the two integrity rules used in DBMS?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            The two types of  integrity rules are referential integrity rules and entity integrity rules. Referential integrity rules dictate that a database does not contain orphan foreign key values. This means that 
            A primary key value cannot be modified if the value is used as a foreign key in a child table. Entity integrity dictates that the primary key value cannot be Null.
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.6 What is command line argument?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            Getting the arguments from command prompt in c is known as command line arguments. In c main function has three arguments.They are:
            Argument counter
            Argument vector
            Environment vector  
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.7 Advantages of a macro over a function?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            Macro gets to see the Compilation environment, so it can expand #defines. It is expanded by the preprocessor. 
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.8 Explain the difference between 'operator new' and the 'new' operator?   
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            The difference between the two is that operator new just allocates raw memory, nothing else. The new operator starts by using operator new to allocate memory, but then it invokes the constructor for the right type of object, so the result is a real live object created in that memory. If that object contains any other objects (either embedded or as base classes) those constructors as invoked as well.
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.9 What is a spanning Tree?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            A spanning tree is a tree associated with a network. All the nodes of the graph appear on the tree once. A minimum spanning tree is a spanning tree organized so that the total edge weight between nodes is minimized. 
          </div>
        </div>
      </div>
      <div className="p-0">
        <p>
          <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Q.10 What is user defined exception in Java?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            The keywords used in java application are try, catch and finally are used in implementing used-defined exceptions. This Exception class inherits all the method from Throwable class.
          </div>
        </div>
      </div>
      <div className="bba"> 
        <h3>BBA</h3>   
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.1 What Do You Mean By Business Administration?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Business administration can be termed as the way of managing a business or non-profit organization so as to both maintain the stability of the organization and develop it at the same time.
              It consists of various departments starting from the operations to management. Also, there are various roles related to business administration which include business support, office manager, and Chief Executive Officer (CEO) and most companies have a dedicated group of administrators.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.2 What Are The Roles Played By A Business Administrator?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Business Administrator is someone who handles all the financial management of a business. His specific role varies from one company to another.
              A business administrator understands the business operations and processes. His roles may involve accounting, finance, marketing,   economics, statistics, human resources, and decision-making.
              In small organ        izations, business administrator manages administrative support services but in large organizations there are several levels of managers who specialize in different areas from human resources to facilities management.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.3 What Is The Difference Between Administration And Management?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Management and administration are two different words but mean almost the same apart from some slight differences.
              Administration deals with the setting up of objectives and crucial policies for every organization, whereas management is the act of putting the policies and plans decided upon by the administration into practice.
              Administration is a decision making body, while management executes those decisions made by the administration.
              Administration works in the top level, whereas management operates in the middle level.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.4 How Does Business Contribute To Economic Development?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Economic growth is measured through the changes in the gross domestic product of a country over a year. Growth of the economy is related to business as business involves money. Real economic development can be seen from the major improvements in living standards, expansion of the existing market and the opening of new ones. Therefore, when a business enterprise is setting objectives and planning strategies for the future, economic growth is an important aspect to consider.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.5 Is Management A Profession? Give Reasons.
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Yes, management is considered a profession as it has the following features:
              Well defined body of knowledge: In management there is a systematic body of knowledge which is an important feature of any profession.
              Restricted Entry: You can enter any profession through an examination or degree. In case of management too companies prefer to appoint candidates only with an MBA degree.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.6 Who Are The Stakeholders In An Organization?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              A stakeholder can be a person, an organization, a social group or a society at large that has a stake in a business where stake is an essential interest in the business or its activities.
              It can include ownership and property interests, legal interests and obligations, and moral rights.   
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.7 What Are Short Term And Long Term Planning?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Short-Term
              Short-term planning is the type that looks over the present status of the company and accordingly plans are made and strategies are   
              developed to implement them.
              Long-Term
              When any organization wants to solve some problems permanently, they look for long term plans. Long-term planning is done keeping in mind the    social, economic, and political situations.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.8 Define Proactive Decision. How Is It Different From Reactive Decision?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Proactive Decision is about acting in advance for a future situation. It means taking measures in advance to control some situations rather than just waiting for something to happen.
              Reactive business decisions are those that respond to some unexpected event only after it occurs, while proactive strategies are designed to handle expected possible challenges.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.9 What Is The Main Difference Between Vertical And Horizontal Organizations?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Vertical The vertical organization structure is in a descending order from the top to bottom where the chain of command is distributed and the person at the top has the maximum power.
              Horizontal A horizontal organization has a team of employees working in the same designation and each person has pre-defined duties. These set of employees have similar lines of work with less defined chain of command.
            </div>
          </div>
        </div>
        <div className="p-0">
          <p>
            <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Q.10 What Do You Understand By The Concept Of Departmentalization?
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body text-center">
              Departmentalization can be understood as the dividing of an organization into different departments where the tasks are assigned according to the departments specializations in the organization.
            </div>
          </div>
        </div>
        <div className="mba"> 
          <h3>MBA</h3>   
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.1 Give me a brief description of yourself!
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center"> 
                This is usually the opening interview question and answer for MBA fresher interview or for any other job interview. So you should first know the basic reason behind this question while answering in your upcoming MBA fresher interview or in any job interview for some other position. An interviewer generally asks this question to check how better you can present yourself. So this is the sole reason behind asking this question in your job interviews.
                You should start by introducing yourself confidently with sheer honesty. You can also mention your liking and your passion for the role in your answer. Try to provide only essential information and keep the introduction as job-relevant as possible. You can also add all your job-relevant skills and achievements to let the interviewer know what the company will be getting from you if you get hired.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.2 What are your strong points &amp; weak points?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                This is one of those interview question and answer for MBA freshers that the interviewer asks to know the level of honesty of the candidate and how better he knows himself. Honesty is the best quality that a person should possess other than knowledge.
                Most importantly, always be honest while tackling such interview questions and answers for MBA freshers. Try to always answer such questions with confidence. As we all know, no one in this world is perfect; people have their strengths and flaws, so don’t hold back while telling your strengths and weaknesses to the interviewer.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.3 Why did you leave your last job?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                While tackling this interview question and answer for MBA freshers, one can play with their strengths and present the answer in the best possible way rather than quoting some negative reasons.
                So try to stay positive irrespective of any circumstances. Try to include some positive reasons instead of mentioning some major problems for your answer. Mentioning some problems or adverse facts will somehow portray your bad image to the interviewer. So keep smiling and try to say something like I’m looking to learn new skills or looking for a perfect opportunity to upgrade my personality for future endeavors.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.3 Do you consider yourself successful?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                You should always answer this interview question and answer for MBA freshers with a YES When you answer such a question confidently with a YES, you are already halfway there to impress the interviewer with your answer. For the other half, you should explain your answer by including all those golden moments of achieving some of your life goals
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.4 What do you know about this organization?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                Some beforehand homework and company research will help you tackle this interview question and answer for MBA freshers in your upcoming MBA interviews.
                Before going for any MBA interview, it is advised to have a thorough research of the company profile and their future ambitions and goals to answer such questions confidently to the interviewer. So state all the researched facts and details about the company to impress the interviewer with your confident answer.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.5 What do your co-workers say about you?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                While dealing with such interview questions and answers for MBA freshers, one can mention two or three positive facts which your colleagues have told you during your job and also which are relevant for this MBA fresher interview to leave a good positive impact to the interviewer.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.6 Where do you see yourself 5 years from now?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                This is one of the prime interview question and answer for MBA freshers that one will find in almost every MBA interview of their lifetime. An interviewer wants to check two things in a candidate by asking such interview questions and answers for MBA freshers. Out of those two things, first is how much the candidate understands about the industry and its professional requirements and goals. The second thing is to check the candidate’s ambitions and future aspirations.
                Before answering this question, one should be aware of their career goals. One should find connections between his/her goals and the company’s job description so that one can answer this question by mentioning job-relevant future aspirations only. Such answers will let the interviewer know about your vision towards long-term cooperation with their company.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.7 at is your biggest professional achievement?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                This is another important interview question and answer for MBA freshers, which is frequently asked by the interviewer in the MBA job interviews. The interviewer generally asks this question in the job interview to get an idea about how well the candidate knows their skills or how were they at his previous job if they had one previously?
                One should answer such questions confidently by stating examples of all your significant successes that you’ve had so far. You can answer this either by quoting just a single achievement that is job relevant and is close to your heart or you can answer this by stating a collection of small successes which lead to some major one.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.8  What are the reasons why you left the previous job?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                This interview question and answer for MBA freshers that a candidate generally faces in his MBA interview. 
                One should answer this question with confidence and sheer honesty. You can take this opportunity to impress the interviewer by saying that you are looking for some role that offers more challenges to ensure some better growth or one can say just to seek diversity in career roles &amp; responsibilities to further explore my hidden strengths
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.9 Are you a perfect team player?
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                his is another interview question and answer for MBA freshers that a candidate usually faces in his MBA interview. The interviewer generally asks this question upfront to check whether the candidate will fit in their large and diversified teams efficiently or not?
                To answer these types of MBA interview questions, one can include their instances of being a team player in their different past scenarios, which can either be playing some team sport or participating in some extracurricular activities.
              </div>
            </div>
          </div>
          <div className="p-0">
            <p>
              <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Q.10 Tell me about your future goals!
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body text-center">
                Here is another interview question and answer for MBA freshers, which is frequently asked in MBA fresher interviews. The interviewer asks this question to better understand the candidate’s goals and how long they are going to stick to their company.
                Try to present your answer to match your employer’s expectations, nothing more than that. Keep it company-related as much as possible to maximize your chances of getting hired.
              </div>
            </div>
          </div>
          <div className="bcom"> 
            <h3>B.COM</h3>   
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.1 What Is Commerce?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Commerce refers to and includes all those activities which are necessary to bring goods and services from the place of their origin to the place of their consumption.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.2  Into How Many Departments Is Commerce Mainly Divided Into? Which Are They?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  into two.
                  They are:
                  Trade
                  Aids of trade  
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.3 The Trade Is Sub Divided Into Two Divisions, Which Are They?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  Home trade and Foreign trade.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.4 Into How Many Divisions The Home Trade Is Divided?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  Into two they are, Whole sale and retail
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.5  Which Are The Two Divisions Of Whole Sale?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  They are import trade and export trade
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.6 When Did The Commerce Begin To Grow?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">      
                  It is began to grow only after the division of labour and development of exchange. Once it started growing, it spread its invisible thread throughout the length and breadth of the world.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.7 What Is A Company?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  A company is an incorporated association which is an artificial person, having an independent legal entity, with a perpetual succession, a common seal, a common capital comprised of transferable shares and carrying limited liability.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.8 What Is Audit?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  An audit may be said to be such an examination of books, accounts and vouchers of a business, whether it is in a proper manner for the financial period.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.9 What Is The Minimum Number Of Directors In A Public Company?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  Atleast two directors
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.10 What Is Plant Layout?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Plant layout means the arrangement and location of different departments and of the machinery and equipment within a department
                </div>
              </div>
            </div>
            <h3>M.COM</h3>   
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.1  What is MCom?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  MCom or Masters in Commerce is a two-year post-graduation degree offered at various colleges in India. The course is ideal for students who wish to pursue a career in banking, finance, accounting and different commerce sectors.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.2 What are the eligibility criteria to apply for MCom?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  The minimum eligibility criteria to apply for MCom is 50% aggregate in BCom or BCom (H) from a recognised university or college. Some universities also accept students who have completed their graduation in Economics (H), BBA, BFIA or BBE with a minimum of 60% aggregate.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.3  Is there a concession for the reserved category students for MCom?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Yes, 5% relaxation is provided to candidates belonging to reserved categories
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.4 What are the future opportunities for MCom graduates?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Students who successfully complete the MCom degree, have numerous career options worldwide. They can opt for various jobs in the public, private and government sectors. Chartered Accountants is one of the most popular job options for MCom graduates. Students can also opt to become Finance Executives, Bank Managers, Teachers, Trade Managers, Wealth Managers, Shares Broker, etc. 
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.5  What is the average salary offered to MCom graduates?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center">
                  The average salary of MCom graduates is approximately INR 5.1 lakh.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.6 Are there any specialization for MCom?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Yes, the course has many specializations to offer besides MCom (General) and MCom (Honours) such as MCom in Mathematics, MCom in Finance, MCom in Economics, MCom in Taxation, MCom in Banking, MCom in Accounting, MCom in Business Management, etc. 
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.7  Do I need to have any specific skill set to be able to study MCom?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  MCom tests the applicant's analytical skills. Therefore the candidates who wish to pursue MCom must possess skills such as a love for numbers, strong logical reasoning skills, ability to remember facts and figures, good mathematic ability, strong verbal and communication skills, leadership skills, eye for detail, knowledge of banking and finance sector, good computer skills, etc.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.8 Which are some of the top recruiters who hire MCom graduates?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Some of the top recruiters who hire MCom graduates are SBI, Punjab National Bank, Citibank, ICICI Bank, HDFC, Deloitte, KPMG, TFC, Ernst and Young, etc.
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.9 What are some of the ways to estimate bad debts?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Some of the popular ways of estimating bad debts are the percentage of outstanding accounts, aging analysis, and percentage of credit sales
                </div>
              </div>
            </div>
            <div className="p-0">
              <p>
                <a className="btn btn-primary qw" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Q.10  What is deferred tax liability?
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body text-center"> 
                  Deferred tax liability signifies that a company may pay more tax in the future due to current transactions.
                </div>
              </div>
            </div>
          </div></div></div></div></div></div>
  )
}
