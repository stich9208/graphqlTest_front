import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const DETAIL_QUERY = gql`
  query eachPost($postId: Int!) {
    post(id: $postId) {
      title
      body
    }
  }
`;

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, loading, error } = useQuery(DETAIL_QUERY, {
    variables: {
      postId: Number(id),
    },
  });

  return loading ? (
    <div>Loading...</div>
  ) : data.post ? (
    <div>
      <h1>{data.post.title}</h1>
      <div>{data.post.body}</div>
    </div>
  ) : (
    navigate("/")
  );
};

export default Detail;
