import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  name,
  image,
  brand,
  price,
  color,
  gender,
  category,
  id,
}) => {
  return (
    <div>
      <Card maxW="sm" backgroundColor={"#1c1c1e"} boxShadow='dark-lg' >
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            h={200}
            m={"auto"}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" color={"white"}>{name}</Heading>
            <Text color={"white"}>
                Brand {brand}
            </Text>
            <Text color="white" fontSize="2xl">
              Price {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter backgroundColor={"black"} borderRadius="lg" > 
          <ButtonGroup spacing="2">
            <Button variant="solid" color={'black'}  backgroundColor={"#93fb6d"}>
              Buy
            </Button>
            <Button variant="ghost" backgroundColor={"white"} color={"black"} border={"solid black 1px"}>
              Add to Cart
            </Button>
            <Button variant="solid" color={'black'}  backgroundColor={"#93fb6d"}>
              <Link to={`/edit/${id}`}>Edit</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};
