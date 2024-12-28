import React from 'react';

function Contact() {
  return (
      <div className='AlignCenter'>
   
   
<div>

<fieldset>
<legend className="ProjectNames">Send Me A message!</legend>
<p id="resumeText">Email me at <div id="highlight">inquisitiveprogramming@gmail.com</div></p>
</fieldset>

<fieldset>
<legend className="ProjectNames">My Resume</legend>
<p id="resumeText">You can download my resume from <a id="resumeLink" href="https://drive.google.com/file/d/17T7PjFmNozJpgyTO5KPPqNf8lvcz9pBH/view?usp=sharing" target="_blank" rel="noreferrer">here</a></p>
</fieldset>

<fieldset>
<legend className="ProjectNames">Project Downloads</legend>
<p  id="resumeText">You can download my project files from <a id="resumeLink" href="https://github.com/aden913/portfolioProjects" target="_blank" rel="noreferrer">here</a></p>
</fieldset>

</div>
   </div>
  );
}

export default Contact;
