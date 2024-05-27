import React from 'react'
import UseStateComponent from './components/UseState/UseStateComponent'
import UseReducerComponent from './components/UseEffect/UseEffectComponent'
import UseEffectComponent from './components/UseEffect/UseEffectComponent'
import UseEffectFetchComponent from './components/UseEffect/UseEffectFetchComponent'
import UseRefComponent from './components/UseRef/UseRefComponent'
import IndianGoverment from './components/UseContext/IndianGoverment'
import MoneyState from './components/UseContext/MoneyState'
import UseLayOutComponent from './components/UseLayout/UseLayOutComponent'
import UseCallbackComponent from './components/UseCallback/UseCallbackComponent'
import UseCallbackComponent1 from './components/UseCallback/UseCallbackComponent1'
import UseMemoComponent from './components/UseMemo/UseMemoComponent'

const App = () => {
  return (
    <div>

<h2>--UseStateComponent--</h2>
<UseStateComponent/> 

<h2>--UseReducerComponent--</h2>
<UseReducerComponent/>

<h2>--UseEffectComponent--</h2>
<UseEffectComponent/>  

<h2>--UseEffectFetchComponent--</h2>
<UseEffectFetchComponent/> 

<h2>--UseRefComponent--</h2>
<UseRefComponent/>

<h2>--IndianGoverment--</h2>
<MoneyState>
   <IndianGoverment/>
</MoneyState> 

<h2>--UseLayOutComponent--</h2>
  <UseLayOutComponent/>

<h2>--UseCallbackComponent--</h2>   
<UseCallbackComponent/> 

<h2>--UseCallbackComponent1--</h2>
<UseCallbackComponent1/>

<h2>--UseMemoComponent--</h2>
<UseMemoComponent/>

</div>
  )
}

export default App
