import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { ImageTwoTone, Send } from "@material-ui/icons";
import { Files } from "classes/Files";
import { Conversation, Message, MessageData } from "classes/Message";
import AuthService from "components/auth/api/AuthService";
import User from "layout/User";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GridImageView from "tools/customDesign/ImageVeiw";
import ShadowText from "tools/customDesign/ShadowText";
import { getDifference } from "tools/Tools";
import useWindowDimensions from "tools/useWindowDimension";
import MessageService from "./MessageService";

function InboxNameContainer({ data }: { data: Conversation }) {
  const history = useHistory();
  const [width, setWidth] = useState({ parentWidth: 0, avatarWidth: 0 });
  console.log("in body side container", data);
  useEffect(() => {
    setWidth({
      ...width,
      parentWidth:
        document.getElementsByClassName("inbox-name-container-root")[0]
          ?.clientWidth - 16 || 0,
      avatarWidth:
        document.getElementsByClassName("inbox-name-container-avatar")[0]
          ?.clientWidth || 0,
    });
  }, []);
  let nameWidth = width.parentWidth - width.avatarWidth;
  let role =
    data.message.senderId == AuthService.getCurrentUsername()
      ? "SENDER"
      : "RECEIVER";
  let username =
    role === "SENDER" ? data.message.receiverId : data.message.senderId;

  let messageText = "";
  if (role === "SENDER") {
    if (data.message.file.title === "picture") {
      messageText = "You sent a picture";
    } else {
      messageText = "You : " + data.message.file.content;
    }
  } else {
    if (data.message.file.title === "picture") {
      messageText = data.firstName + " sent a picture";
    } else {
      messageText = data.message.file.content;
    }
  }

  return (
    <Grid
      container
      direction="row"
      className="inbox-name-container-root"
      wrap="nowrap"
      spacing={1}
      alignItems="center"
      style={{ cursor: "pointer", padding: "8px" }}
      onClick={(event) => {
        history.push(`/message/${username}`);
      }}
      // href={`/message/${data.username}`}
      // component='div'
    >
      <Grid item className="inbox-name-container-avatar">
        <Avatar src={data.photo} />
      </Grid>
      <Grid item container direction="column" style={{ width: nameWidth }}>
        <Grid item>
          <Typography display="block" variant="h6" noWrap>
            {data.fullName}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          // wrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={8}>
            <Typography variant="body1" noWrap>
              {messageText}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align="right" variant="body2">
              {getDifference(new Date(data.message.file.uploadTime))}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
function SideContainer({
  conversationList,
}: {
  conversationList?: Conversation[];
}) {
  return (
    <Grid container direction="column">
      {conversationList?.map((item, idx) => (
        <React.Fragment key={item.message.id}>
          <Grid item container>
            <InboxNameContainer data={item} />
          </Grid>

          <Grid item container>
            <Divider style={{ width: "100%" }} />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}

function SendMessageFormat({ message, children }) {
  let value = "";
  let time = new Date(message.file.uploadTime);
  let curTime = new Date();
  if (curTime.getTime() - time.getTime() < 24 * 3600 * 1000)
    value = time.toLocaleTimeString();
  else value = time.toLocaleString();

  return (
    <Grid item container wrap="nowrap">
      <Grid item xs={false} md={2} />
      <Grid item container justifyContent="flex-end">
        <Tooltip title={value} placement="left" arrow>
          <Grid
            item
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "wheat",
              color: "black",
            }}
          >
            {children}
          </Grid>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
function ReceiveMessageFormat({ message, photo, children }) {
  let value = "";
  let time = new Date(message.file.uploadTime);
  let curTime = new Date();
  if (curTime.getTime() - time.getTime() < 24 * 3600 * 1000)
    value = time.toLocaleTimeString();
  else value = time.toLocaleString();
  return (
    <Grid item container wrap="nowrap">
      <Grid
        item
        container
        xs={12}
        md={10}
        direction="row"
        wrap="nowrap"
        spacing={1}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Grid item>
          <Avatar src={photo} />
        </Grid>
        <Tooltip title={value} placement="right" arrow>
          <Grid
            item
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "pink",
              color: "black",
              minHeight: 48,
            }}
          >
            {children}
          </Grid>
        </Tooltip>
      </Grid>
      <Grid item xs={false} md={2} />
    </Grid>
  );
}
function SendMessage({ message }: { message: Message }) {
  // function SendMessage({ type }: { type: "picture" | "text" }) {
  function PictureMessage() {
    return (
      <SendMessageFormat message={message}>
        <GridImageView src={message.file.content} />
      </SendMessageFormat>
    );
  }
  function TextMessage() {
    return (
      <SendMessageFormat message={message}>
        <Typography variant="body1">{message.file.content}</Typography>
      </SendMessageFormat>
    );
  }
  if (message.file.title === "picture") {
    return <PictureMessage />;
  } else if (message.file.title === "text") {
    return <TextMessage />;
  }
  return <></>;
}
function ReceiveMessage({
  message,
  photo,
}: {
  message: Message;
  photo: string;
}) {
  function PictureMessage() {
    return (
      <ReceiveMessageFormat message={message} photo={photo}>
        <GridImageView src={message.file.content} />
      </ReceiveMessageFormat>
    );
  }
  function TextMessage() {
    return (
      <ReceiveMessageFormat message={message} photo={photo}>
        <Typography variant="body1">{message.file.content}</Typography>
      </ReceiveMessageFormat>
    );
  }
  if (message.file.title === "picture") {
    return <PictureMessage />;
  } else if (message.file.title === "text") {
    return <TextMessage />;
  }
  return <></>;
}
function InboxBody({
  messages,
  photo,
}: {
  messages?: Message[];
  photo?: string;
}) {
  const bodyRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    if (bodyRef && bodyRef.current) {
      // @ts-ignore
      bodyRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);
  return (
    <>
      {messages?.length == 0 && (
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <ShadowText>
            Please send a message to start the conversation
          </ShadowText>
        </Grid>
      )}
      {messages?.length != 0 && (
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-end"
          // style={{ height: "100%" }}
          spacing={2}
        >
          {messages?.map((message) => {
            if (message.senderId === AuthService.getCurrentUsername()) {
              return (
                <Grid item key={message.id} container>
                  <SendMessage key={message.id} message={message} />
                </Grid>
              );
            } else {
              return (
                <Grid item key={message.id} container>
                  <ReceiveMessage
                    key={message.id}
                    message={message}
                    photo={photo || ""}
                  />
                </Grid>
              );
            }
          })}
          {messages && messages?.length > 0 && (
            <div
              // @ts-ignore
              ref={bodyRef}
            />
          )}
        </Grid>
      )}
    </>
  );
}
function BottomBar({
  username,
  update,
}: {
  username?: string;
  update: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>();
  const [message, setMessage] = useState("");
  async function sendMessage(file: Files) {
    await MessageService.insertMessage({
      id: 0,
      senderId: AuthService.getCurrentUsername(),
      receiverId: username || "",
      file: file,
    }).then((response) => {
      update();
    });
  }
  async function sendPictureMessage(event) {
    let file = new Files("MESSAGE", "picture").setContent({
      file: event.target.files[0],
    });
    await file.upload();
    await sendMessage(file);
    console.log(event);
  }
  async function sendTextMessage() {
    if (message === "") return;
    var file = new Files("MESSAGE", "Message")
      .setContent(message)
      .setTitle("text");
    await sendMessage(file);
    setMessage("");
  }
  return (
    <Grid
      item
      container
      wrap="nowrap"
      alignItems="center"
      spacing={1}
      justifyContent="space-around"
    >
      <Grid item>
        <IconButton
          // @ts-ignore
          onClick={() => fileInputRef?.current.click()}
        >
          <input
            onChange={sendPictureMessage}
            multiple={false}
            // @ts-ignore
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
          />
          <ImageTwoTone fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item container>
        <TextField
          value={message}
          fullWidth
          variant="outlined"
          color="primary"
          style={{ backgroundColor: "#3A3B3C", borderRadius: 50 }}
          placeholder="Write a message..."
          onChange={(event) => setMessage(event.target.value)}
          InputProps={{ style: { borderRadius: 50, height: 40 } }}
          onKeyPress={(event) => {
            console.log(event.key);
            if (event.key === "Enter") {
              sendTextMessage();
            }
          }}
        />
      </Grid>
      <Grid item>
        <IconButton onClick={sendTextMessage}>
          <Send fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

function Inbox({ data, update }: { data?: MessageData; update: () => void }) {
  const [height, setHeight] = useState({
    headerHeight: 0,
    inboxHeaderHeight: 0,
    inboxFooterHeight: 0,
  });
  const { innerHeight, innerWidth } = useWindowDimensions();
  useEffect(() => {
    setHeight({
      ...height,
      headerHeight: document.getElementById("header-root")?.clientHeight || 0,
      inboxHeaderHeight:
        document.getElementById("message-inbox-header")?.clientHeight || 0,
      inboxFooterHeight:
        document.getElementById("message-inbox-footer")?.clientHeight || 0,
    });
  }, [data]);

  console.log("message", height);
  const messengerHeight = innerHeight - height?.headerHeight - 5;
  const inboxBodyHeight =
    messengerHeight - height.inboxHeaderHeight - height.inboxFooterHeight;
  console.log("in inbox ", data);
  if (!data?.username)
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <ShadowText>Please select a conversation</ShadowText>
      </Grid>
    );
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ padding: "0px" }}
    >
      <Grid
        item
        container
        justifyContent="center"
        id="message-inbox-header"
        style={{
          paddingBottom: 4,
          borderBottom: "1px solid #393A3B",
          padding: "0px 12px",
        }}
      >
        <Typography
          href={`/profile/${data?.username}`}
          variant="h5"
          align="center"
          component="a"
          style={{ color: "aquamarine" }}
        >
          {data?.fullName}
        </Typography>
      </Grid>
      <Grid
        item
        container
        className="hide-scroll"
        style={{
          height: inboxBodyHeight,
          overflowY: "scroll",
          overflowX: "hidden",
          padding: "0px 12px",
        }}
      >
        <InboxBody messages={data?.messages} photo={data.photo} />
      </Grid>
      <Grid
        item
        container
        id="message-inbox-footer"
        style={{
          borderTop: "1px solid #393A3B",
          padding: "0px 12px",
        }}
      >
        <BottomBar username={data?.username} update={update} />
      </Grid>
    </Grid>
  );
}
export function Messenger() {
  let { username } = useParams();
  let history = useHistory();
  const [height, setHeight] = useState({ headerHeight: 0 });
  const { innerHeight, innerWidth } = useWindowDimensions();
  const [conversationList, setConversationList] = useState<Conversation[]>();
  const [data, setData] = useState<MessageData>();
  const [loading, setLoading] = useState(true);
  const [pageNotFound, setPageNotFound] = useState(false);

  useEffect(() => {
    if (username) {
      AuthService.existByUsername(username).then((response) => {
        if (!response.data.boolValue) {
          setPageNotFound(true);
        }
      });
    }
    loadSidePane();
    loadInbox();
    setHeight({
      ...height,
      headerHeight: document.getElementById("header-root")?.clientHeight || 0,
    });
  }, [username]);
  async function loadSidePane() {
    await MessageService.getConversationList().then((response) => {
      console.log("conversation list", response.data);
      setConversationList(response.data);
    });
  }
  async function loadInbox() {
    if (username) {
      await MessageService.getMessages(username).then((response) => {
        console.log("messages", response.data);
        setData(response.data);
      });
    }
    setLoading(false);
  }
  console.log("message", height);
  const messengerHeight = innerHeight - height?.headerHeight - 1;
  const leftSideHeight = messengerHeight;
  return (
    <User
      disableFooter
      disableCategoryBar
      fullWidth
      loading={loading}
      pageNotFound={pageNotFound}
    >
      <Card
        id="messenger-root"
        style={{
          height: messengerHeight,
          overflow: "hidden",
          backgroundColor: "#242526",
          borderRadius: 0,
        }}
      >
        <CardContent
          style={{
            padding: 0,
            height: conversationList?.length == 0 ? "100%" : "",
          }}
        >
          {conversationList?.length == 0 && !username && (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <ShadowText>You have no conversation yet.</ShadowText>
            </Grid>
          )}
          {(username || (conversationList && conversationList?.length > 0)) && (
            <Grid container>
              <Grid
                item
                xs={12}
                md={3}
                className="hide-scroll"
                style={{
                  height: leftSideHeight,
                  overflowY: "auto",
                  overflowX: "hidden",
                  borderRight: "2px solid #393A3B",
                }}
              >
                <SideContainer conversationList={conversationList} />
              </Grid>
              <Grid item xs={12} md={9}>
                <Inbox
                  data={data}
                  update={() => {
                    loadSidePane();
                    loadInbox();
                  }}
                />
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </User>
  );
}

// import AuthService from "components/auth/api/AuthService";
// import React, { useEffect, useState } from "react";
// import { StreamChat } from "stream-chat";
// import {
//   Channel,
//   ChannelHeader,
//   ChannelList,
//   Chat,
//   MessageInput,
//   MessageList,
//   Thread,
//   Window,
// } from "stream-chat-react";
// import "stream-chat-react/dist/css/index.css";

// const filters = { type: "messaging" };
// const options = { state: true, presence: true, limit: 10 };
// const sort = { last_message_at: -1 };

// const client = StreamChat.getInstance("s8nme6ndn57p");

// export function Messenger() {
//   // Define values.
//   const api_key = "s8nme6ndn57p";
//   const api_secret =
//     "whsbzzcuee28yzrkp4fpxpxty6gvdaang96euc5rexgn4dx8zqnrywwgq66wq9tc";
//   const user_id = AuthService.getCurrentUsername();

//   // Initialize a Server Client
//   const serverClient = StreamChat.getInstance(api_key, api_secret);
//   // Create User Token
//   const token = serverClient.createToken(user_id);

//   const [clientReady, setClientReady] = useState(false);

//   useEffect(() => {
//     const setupClient = async () => {
//       try {
//         await client.connectUser(
//           {
//             id: "dave-matthews",
//             name: "Dave Matthews",
//           },
//           token
//         );

//         setClientReady(true);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     setupClient();
//   }, []);

//   if (!clientReady) return null;

//   return (
//     <Chat client={client}>
//       <ChannelList
//         filters={filters}
//         // @ts-ignore
//         sort={sort}
//         options={options}
//       />
//       <Channel>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// }
