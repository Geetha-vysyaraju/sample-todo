import React, { useState } from "react";
import { Button, Input, List, Typography, Space, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Text } = Typography;
const Users = () => {
  const [Users, setUsers] = useState([]);
  const [currentUser, setcurrentUser] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);
  const handleAddTodo = () => {
    if (currentUser.trim() === "") return;
    if (editIndex !== null) {
      const updatedUsers = Users.map((todo, index) =>
        index === editIndex ? currentUser : todo
      );
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...Users, currentUser]);
    }
    setcurrentUser("");
  };

  const handleEditTodo = (index) => {
    setcurrentUser(Users[index]);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    setDeleteIndex(index);
    setModalText(`Are you sure you want to delete this user?`);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    const updatedUsers = Users.filter((_, i) => i !== deleteIndex);
    setUsers(updatedUsers);
    setIsModalVisible(false);
    setDeleteIndex(null);
  };

  const cancelDelete = () => {
    setIsModalVisible(false);
    setDeleteIndex(null);
  };

  return (
    <div style={{ backgroundColor: "#967bb6", minHeight: "400vh", marginTop:"30px", alignItems: "center", justifyContent: "center" }}>
    <div
    style={{
        maxWidth: "600px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
      }}>
      <h1  style={{color:"purple"}} >ADD USER</h1>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          placeholder="Enter a User"
          value={currentUser}
          onChange={(e) => setcurrentUser(e.target.value)}
        />
        <Button style={{color:"white",background:"purple",marginLeft:"80vh"}} type="primary" onClick={handleAddTodo}>
          {editIndex !== null ? "Update User" : "Add User"}
        </Button>
        <List
          bordered
          dataSource={Users}
          renderItem={(todo, index) => (
            <List.Item
              actions={[
                <Button
                  key="edit"
                  type="link"
                  icon={<EditOutlined  style={{color:"purple"}}/>}
                  onClick={() => handleEditTodo(index)}
                />,
                <Button
                  key="delete"
                  type="link"
                  icon={<DeleteOutlined style={{color:"purple"}} />}
                  onClick={() => handleDeleteTodo(index)}
                />,
              ]}
            >
              <Text>{todo}</Text>
            </List.Item>
          )}
        />
      </Space>
      <Modal
        title="Confirm Delete"
        visible={isModalVisible}
        onOk={confirmDelete}
        onCancel={cancelDelete}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
    </div>
  );
};

export default Users;
