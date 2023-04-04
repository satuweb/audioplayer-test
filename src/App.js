import { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./hoc/Layout/Layout"
import Sounds from "./pages/Sounds"
import Doc from "./pages/Doc"
const App = () => {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path='/' component={Sounds} exact />
          <Route path='/doc' component={Doc} />
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default App
