export const fetchClients = async () => {
  const response = await fetch("/api/clients");
  if (!response.ok) throw new Error("Failed to fetch clients");
  return response.json();
};

export const addClient = async (client) => {
  const response = await fetch("/api/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(client),
  });
  if (!response.ok) throw new Error("Failed to add client");
  return response.json();
};

export const updateClient = async (id, client) => {
  const response = await fetch(`/api/clients/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(client),
  });
  if (!response.ok) throw new Error("Failed to update client");
  return response.json();
};

export const deleteClient = async (id) => {
  const response = await fetch(`/api/clients/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete client");
  return response.json();
};
