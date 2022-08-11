import { Link } from "react-router-dom";

import { useQuery, useMutation, gql } from "@apollo/client";

const POST_QUERY = gql`
  query getAllPosts {
    posts {
      id
      title
    }
  }
`;
const DELETE_POST = gql`
  mutation deletePost($postId: Int!) {
    deletePost(id: $postId)
  }
`;

function App() {
  console.log("app");
  const { data, loading, error, refetch } = useQuery(POST_QUERY);
  const [deldeldel] = useMutation(DELETE_POST);

  const deleteClick = (id) => {
    deldeldel({ variables: { postId: Number(id) } });
    refetch();
  };

  return (
    <div>
      {data ? (
        <ul>
          {data.posts.map((d) => (
            <li key={d.id}>
              <span>{d.id} </span>
              <Link to={`/book/${d.id}`}>{d.title}</Link>
              &nbsp;
              <button onClick={() => deleteClick(d.id)}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
