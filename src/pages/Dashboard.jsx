import React from "react";
import profilePic from "../assets/profile.png";
import camera from "../assets/camera.png";

export default function Dashboard() {
  const user = {
  avatarSrc : profilePic,
  cameraIconSrc : camera,
  name : "Marry Doe",
  email : "Marry@Gmail.Com",
  bio :
    "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam",
}
  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "16px 16px 12px 16px", borderBottom: "1px solid #E5E7EB", marginBottom: 10, backgroundColor: "white" }}>
          <h1
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 500,
              color: "#111827",
              margin: 0,
            }}
          >
            Account Settings
          </h1>
        </div>

        
        <div style={{ padding: "0 16px 16px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
            <div style={{ position: "relative", }}>
              <img
                src={user.avatarSrc}
                alt="Profile"
                style={{
                  width: "76px",
                  height: "76px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "1px solid #E5E7EB",
                }}
                draggable={false}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-1px",
                  right: "-4px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={user.cameraIconSrc}
                  alt="Edit avatar"
                  style={{ width: "25px", height: "25px", objectFit: "contain" }}
                  draggable={false}
                />
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {user.name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {user.email}
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: "12.5px",
              lineHeight: "20px",
              color: "#374151",
            }}
          >
            {user.bio}
          </p>

          
        </div>
        <div
            style={{
              marginTop: "16px",
              borderTop: "3px dotted #D1D5DB",
            }}
          />

        <div
          style={{
            marginBottom: "16px",
            height: "520px",
            borderBottom: "3px dotted #D1D5DB",
          }}
        />
      </div>
    </div>
  );
}
