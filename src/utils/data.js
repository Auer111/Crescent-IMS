export function buildNestedStructure(
  items,
  idField = "id",
  parentIdField = "parent_id"
) {
  if (!items || !items.length) return [];

  const data = {};
  const result = [];

  // First pass: create references
  items.forEach((item) => {
    if (!data[item[idField]]) {
      data[item[idField]] = { ...item, children: [] };
    } else {
      data[item[idField]] = { ...data[item[idField]], ...item }; // Update the item with any additional properties
    }

    if (!item.hasOwnProperty(parentIdField)) {
      result.push(data[item[idField]]);
    }
  });

  // Second pass: nest children
  items.forEach((item) => {
    if (item.hasOwnProperty(parentIdField) && data[item[parentIdField]]) {
      data[item[parentIdField]].children.push(data[item[idField]]);
    }
  });

  console.log(result);
  return result;
}
