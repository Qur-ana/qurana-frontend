import { Group, Image, Container, Title, Button, Text, List, ThemeIcon, rem } from "@mantine/core";
import Head from "next/head";
import NextImage from "next/image";
import { IconCheck } from "@tabler/icons-react";
import { useStyles } from "@/styles/home.style";

export default function Home() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                A <span className={classes.highlight}>modern</span> React <br /> components library
              </Title>
              <Text color="dimmed" mt="md">
                Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>TypeScript based</b> – build type safe applications, all components and hooks export types
                </List.Item>
                <List.Item>
                  <b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project
                </List.Item>
                <List.Item>
                  <b>No annoying focus ring</b> – focus ring will appear only when user navigates with keyboard
                </List.Item>
              </List>

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Get started
                </Button>
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  Source code
                </Button>
              </Group>
            </div>
            <div className={classes.imageWrapper}>
              <NextImage src="/flat/booster.svg" fill alt="Booster your productivity" />
            </div>
            {/* <Image src="/flat/booster.svg" className={classes.image} /> */}
          </div>
        </Container>
      </div>
    </>
  );
}
