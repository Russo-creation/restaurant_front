import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback, useContext } from "react";
import LoadingIndicator from "../components/LoadingIndicator";

import * as postActions from "../store/actions/post/actionCreators";

import { isMobile } from "react-device-detect";
{
  /* <div>{isMobile ? "its phone" : "its PC"}</div> */
}

import { i18n, withTranslation } from "../i18n";

type Props = {
  t: (arg0: string) => React.ReactNode;
};

const helper_page = ({ t }: Props) => {
  //example how to get values from redux state
  const productsLoading = useSelector(state => state.post.loading);
  const productsError = useSelector(state => state.post.error);
  const { posts } = useSelector(state => state.post);

  /* helper for chechking if redux async function was refetched
  after changing site its still keeping data global !!! thats
  how redux works */
  const [isPostRefetched, setIsPostRefetched] = useState(false);

  //example how to call async function from redux thunk
  const dispatch = useDispatch(); //hooks can't be used in fuctions (it's helper)

  /*   callback hook is for memorizing function and ist not refetching when
  component is rerendered. ist rendering only on first render or when
  valuse given in array [] is changed */
  const loadPosts = useCallback(async () => {
    //calling async to able use await function for executing (Promise!)

    //await is for async function promise pointer to execute this code
    await dispatch(postActions.fetchPosts());
    setIsPostRefetched(true); // it will be not executed till above await finish
  }, [dispatch, isPostRefetched]);

  /*   use effect works like componentdidmount() when arguments in array is empty []
  means that function is executed when component is first time rendered
  when we pass arguments in array [] then function is executing when 
  component is first time rendered and when values in argument are changed!!! */
  useEffect(() => {
    loadPosts();
  }, [dispatch, loadPosts]);

  //show error if fetch fail and give button to refetch if needed
  if (productsError) {
    return (
      <div>
        <div>An error ocurred! {productsError} </div>
        <button onClick={loadPosts}>try again</button>
      </div>
    );
  }

  //show loading if fetch is pending or data was not refetched
  if (productsLoading || !isPostRefetched) {
    return (
      <div>
        LOADING... <LoadingIndicator />
      </div>
    );
  }

  return (
    <>
      <div>
        {posts &&
          typeof posts.map === "function" &&
          posts.map(item => <h2 key={item.id}>{item.title}</h2>)}
      </div>
      <div>
        <div>{isMobile ? "its phone" : "its PC"}</div>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "pl" : "en")
          }
        >
          change Lang
        </button>
        {t("login")} {t("logout")} {t("common:h1")}
      </div>
      {process.env.REACT_APP_API_URL}
    </>
  );
};

helper_page.getInitialProps = async () => ({
  namespacesRequired: ["home", "common"]
});

export default withTranslation("home")(helper_page);
