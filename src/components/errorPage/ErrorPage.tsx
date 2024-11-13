
interface IRouteErrorProps {
  statusText?: string;
  message?: string;
}
function ErrorPage({ errorData }:any): JSX.Element {//----------------------------------------------------------
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorData.statusText || errorData.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;