import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <div className="shop-container">
      <Outlet/>
    </div>
  );
};

export default Shop;
