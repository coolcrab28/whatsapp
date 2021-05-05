import { Avatar } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>email</h3>
        </HeaderInformation>
      </Header>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div`
  display: flex;
`;
const Header = styled.div`
  position: fixed;
  background-color: white;
  z-index: 100;
  top: 0;
  width: 90%;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
`;
