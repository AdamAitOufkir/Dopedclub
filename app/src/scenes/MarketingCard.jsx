import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActions } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MarketingCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        marginX: "10px",
        maxWidth: {
          xs: "300px",
          sm: "300px",
          lg: "300px",
        },
        backgroundColor: "rgb(18, 18, 18)",
        color: "white",
        borderRadius: "30px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "transparent" }}>
            <img src="https://i.ibb.co/fFYYRNx/icon.png" alt="" />
          </Avatar>
        }
        title="Dope Marketing"
        // subheader="Elevating Your Brand to New Heights!"
        subheaderTypographyProps={{
          color: "whitesmoke",
        }}
        titleTypographyProps={{
          style: {
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "Poppins",
          },
        }}
      />
      <CardContent
        sx={{
          height: "70px",
          padding: {
            lg: "0 10px",
            xs: "0 30px",
          },
        }}
      >
        <Typography
          variant="body2"
          color="white"
          fontFamily="Poppins"
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "18px",
              sm: "18px",
              md: "18px",
              lg: "18px",
              xl: "20px",
            },
          }}
        >
          For your Skills, Team & anything missing in your marketing
        </Typography>
      </CardContent>

      <CardActions disableSpacing sx={{ padding: 0 }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <IconButton style={{ color: "white" }}>
            <ExpandMoreIcon />
          </IconButton>
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
            <li>
              <Typography paragraph fontFamily="Poppins">
                Social Media Strategy
              </Typography>
            </li>
            <li>
              <Typography paragraph fontFamily="Poppins">
                Team Coaching
              </Typography>
            </li>
            <li>
              <Typography paragraph fontFamily="Poppins">
                Inbound Strategy
              </Typography>
            </li>
            <li>
              <Typography paragraph fontFamily="Poppins">
                Growth Hacking
              </Typography>
            </li>
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
