import React, {
  useEffect,
  // useDeferredValue,
  useTransition,
  useId,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCHPAGE_SEARCH_ACTION } from "../../redux/actions/types";
import { GET_SEARCHPAGE_ASYNC } from "../../redux/actions/actions";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import LabelInput from "../../components/LabelInput/LabelInput";
import Loader from "../../components/Loader/Loader";

const SearchPage = () => {
  const [isPending, startTransition] = useTransition();
  const inputId = useId();
  const inputRef = useRef();
  //   const cashedValues = useDeferredValue(state);
  const { data } = useSelector((state) => state.searchPage);
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.searchValue);

  useEffect(() => {
    Promise.all([dispatch(GET_SEARCHPAGE_ASYNC(searchValue))]);
  }, [dispatch, searchValue]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleValue = (e) => {
    startTransition(() => {
      dispatch(SEARCHPAGE_SEARCH_ACTION(e.target.value));
    });
  };
  const render = data?.map((item) => {
    return <Item key={item.idDrink} item={item} />;
  });

  return (
    <div id="searchPage">
      <Header title="Search page" />
      <div className="container">
        {isPending && <Loader />}

        <LabelInput
          inputId={inputId}
          inputRef={inputRef}
          handleValue={handleValue}
        />

        <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {render}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
