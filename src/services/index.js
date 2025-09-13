export async function addData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error adding data:", e);
  }
}
export async function getData(currentTab) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error getting data:", e);
  }
}
