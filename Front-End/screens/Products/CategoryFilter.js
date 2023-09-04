import React from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Badge, Text } from "native-base";

const CategoryFilter = (props) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        key={"all"}
        onPress={() => {
          props.CategoryFilter("all");
          props.setActive(-1);
        }}
        style={[
          styles.categoryItem,
          props.active === -1 && styles.activeCategory,
        ]}
      >
        <Text
          style={[
            styles.categoryText,
            props.active === -1 && styles.activeCategoryText,
          ]}
        >
          All
        </Text>
      </TouchableOpacity>

      {props.categories.map((item) => (
        <TouchableOpacity
          key={item._id.$oid}
          onPress={() => {
            props.CategoryFilter(item._id.$oid);
            props.setActive(props.categories.indexOf(item));
          }}
          style={styles.categoryItem}
        >
          <Text
            style={[
              styles.categoryText,
              props.active === props.categories.indexOf(item) &&
                styles.activeCategoryText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  activeCategory: {
    borderBottomColor: "orange",
    borderBottomWidth: 2,
  },
  activeCategoryText: {
    color: "orange",
    fontWeight: "bold",
  },
  categoryText: {
    color: "#8D7B68", // Set the color for non-active categories
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CategoryFilter;
