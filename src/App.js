import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import { GlobalStyle } from "./GlobalStyles";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  // get current post this gets you only 10 posts per page
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change posts
  const Paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        <Button onClick={openModal}>i'm a modal.</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
      <h1 className="text-primary mb-3">The Posts</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        Paginate={Paginate}
      />
    </>
  );
}
