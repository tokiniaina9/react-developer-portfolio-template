import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  ListItem,
  ListItemIcon,
  TextField,
  Typography,
} from "@mui/material";

function Contact() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Contact Me
        </h1>
      </section>
      <Grid justifyContent={"center"} spacing={2}>
        <Grid item className="xs:12 md:6">
          <Box p={2}>
            <p className="text-sm md:text-base dark:text-light-paragraph">
              I am a software engineer with a passion for building scalable and
              maintainable software applications. I have a solid understanding
              of object-oriented programming and a strong foundation in computer
              science. I am also a team player and a quick learner. I am always
              eager to learn new things and take on new challenges. If you are
              interested in working with me, please don't hesitate to contact
              me.
            </p>
          </Box>
          <Box p={2} display={"flex"} justifyContent={"center"}>
            <Grid  className="xs:12 md:6">
              <ListItem>
                <ListItemIcon>
                  <EmailOutlinedIcon size="large" />
                </ListItemIcon>
                <Typography variant="h6">
                  <a href="mailto:tokiniaina99@gmail.com">
                    tokiniaina99@gmail.com
                  </a>
                </Typography>
              </ListItem>
            </Grid>
            {/* <Divider orientation="vertical" flexItem /> */}
            <Grid  className="xs:12 md:6">
              <ListItem>
                <ListItemIcon>
                  <PhoneAndroidOutlinedIcon size="large" />
                </ListItemIcon>
                <Typography variant="h6">
                  <a href="tel:+261 34 01 933 01"> +261 34 01 933 01</a>
                </Typography>
              </ListItem>
            </Grid>
          </Box>
        </Grid>
        <Divider sx={{ my: 2 }}>
          <Typography variant="body1" color="text.secondary">
            OR
          </Typography>
        </Divider>
        <Grid item className="xs:12 md:6">
          <Box p={2}>
            <p className="text-sm md:text-base dark:text-light-paragraph">
              Otherwise, you can fill out the form below to contact me directly.
            </p>
          </Box>
          <Grid container spacing={2}>
            <FormControl fullWidth>
              <TextField label="Name" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Email" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Phone" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                rows={8}
                label="Message"
                variant="outlined"
                multiline
              />
            </FormControl>
            <FormControl>
              <Button variant="contained" size="large">
                Send message
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}

export default Contact;
