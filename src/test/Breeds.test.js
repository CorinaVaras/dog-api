import Breeds from './Breeds';
test('testing dog API to equal string', async function () {
    const response = new Breeds();
    let data = await response.api();
    expect(data.message.bulldog).toEqual([
        "boston",
        "english",
        "french"
    ]);
})

test('testing dog API breeds object', async function () {
    const response = new Breeds();
    let data = await response.api();
    
    expect(data.message).toHaveProperty("affenpinscher", []);
})

test('testing dog API breeds and sub-breeds object', async function () {
    const response = new Breeds();
    let data = await response.api();
    expect(data.message).toHaveProperty("buhund", ["norwegian"]);
})


