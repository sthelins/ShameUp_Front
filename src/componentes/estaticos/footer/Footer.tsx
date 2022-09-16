import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import "./Footer.css";

function Footer() {
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token !== "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="fontefooter">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                className="esti"
                variant="h5"
                align="center"
                gutterBottom
              >
                Conheça nossas Redes Sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href=" " target="_blank">
                <GitHubIcon style={{ fontSize: 60, color: "black" }} />
              </a>

              <a href=" " target="_blank">
                <FacebookIcon style={{ fontSize: 60, color: "black" }} />
              </a>
            </Box>
          </Box>
          <Box className="bgdofooter">
            <Box paddingTop={0}>
              <Typography
                className="esti"
                variant="subtitle2"
                align="center"
                gutterBottom
              >
                © 2022 Copyright
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  className="esti text"
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
