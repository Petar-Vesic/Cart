import React from 'react'
import Products from '../producs/Products'
import Singup from '../singup/Singup'
import Cart from '../cart/Cart'
import { Route, Switch } from 'react-router-dom'

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path='/singup' exact>
          <Singup />
        </Route>
        <Route path='/cart' exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes
