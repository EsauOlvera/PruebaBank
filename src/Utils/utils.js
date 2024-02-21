export const fetchData = async () => {
    try {
      const response = await fetch("https://dev.obtenmas.com/catom/api/challenge/banks")
      const json = await response.json()
      return json.map((item, index) => ({
        id: index + 1,
        name: item.bankName,
        age: item.age,
        uri: item.url,
        description: item.description
      }))
    } catch (error) {
      console.error('Error fetching data:', error)
      return []
    }
}
  