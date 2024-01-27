import ExampleLoading from './ExampleLoading';
import ExampleDialog from './ExampleDialog';
import ExampleAlertDialog from './ExampleAlertDialog';
import './page.css';

export default function Page() {
  return (
    <div className="fullscreen">
      <div className="page-container">
        <h1 className="page-title">Modal in React</h1>
        <p className="page-text">
          {
            "Creating a custom Alert/Toast component in React without relying on an external UI library involves building a simple component that manages its own state. By using React's useState and useEffect hooks, you can control the visibility and duration of the toast. This approach allows you to display non-intrusive notifications without adding the bulk of a separate UI library to your project. Customizing the appearance and behavior of the toast is then easily achievable based on your specific design and functionality requirements. "
          }
        </p>
        <div className="btn-container">
          <ExampleDialog />
          <ExampleAlertDialog />
          <ExampleLoading />
        </div>
      </div>
    </div>
  );
}
