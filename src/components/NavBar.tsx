import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" p="10px" />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
