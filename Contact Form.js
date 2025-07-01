import submitForm from './submitForm';

export default function App() {
  return (
    <>
    <div>Contact Us</div>
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm} action="https://questions.greatfrontend.com/api/questions/contact-form" method="POST">
      Name:  <input type="text" name="name"/>
      Email: <input type="text" name="email"/>
      Message:<textarea name="message"/>
      <button type="submit">
      Submit
      </button>
    </form>
    </>
  );
}
