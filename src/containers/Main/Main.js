import React, { useEffect } from "react";
import {
  GET_COCKTAILS_ASYNC,
  GET_CATEGORIES_ASYNC,
  GET_RANDOM_ASYNC,
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import AntdSelect from "../../components/AntdSelect/AntdSelect";
import Item from "../../components/Item/Item";
import { useFilters } from "../../custom hook/useFilter";
import { useSpring, animated } from '@react-spring/web'
const Main = () => {
  const [filter] = useFilters();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.main);
  const { categories } = useSelector((state) => state.categories);

  const [filters, setFilters] = useFilters();

  console.log(categories);

  const { loading, error } = useSelector((state) => state.loading);
  const navigate = useNavigate();
  useEffect(() => {
    Promise.all([
      dispatch(GET_COCKTAILS_ASYNC()),
      dispatch(GET_CATEGORIES_ASYNC()),
      dispatch(GET_RANDOM_ASYNC()),
    ]);
  }, [dispatch]);

  const handleChange = (value) => {
    console.log(value);
    dispatch(GET_COCKTAILS_ASYNC(value));
    // setFilters({ category: value });
  };

  const render = data.map((item) => {
    return (
      <Item
        item={item}
        key={item.idDrink}
        func={() => navigate("/details/" + item.idDrink)}
      />
    );
  });

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })

  }



  if (error) return <h2>{error}</h2>;
  return (
    <div>
      <Header title="Main" />
      {loading && <Loader />}
      <div className="container">
        <AntdSelect categories={categories} handleChange={handleChange}/>
        <animated.div
            onClick={handleClick}
            style={{
              width: 80,
              height: 80,
              background: '#ff6d6d',
              borderRadius: 8,
              ...springs,
            }}
        />
        <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {render}
        </div>
      </div>
    </div>
  );
};

export default Main;
