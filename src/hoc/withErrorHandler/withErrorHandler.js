import useHttpClientErrorHandler from "../../hooks/http-error-handler"
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpClientErrorHandler(axios)
    return (
      <>
        <Modal show={error} modalClosed={clearError}>
          Error: {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    )
  }
}

export default withErrorHandler
