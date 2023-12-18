const { POST, isMatching } = require('../src/app/api/route'); // Replace 'yourFile' with the correct file path

describe('POST function', () => {
    const mockRequest = (data) => ({
        json: jest.fn().mockResolvedValue(data),
    });

    const mockResponse = () => {
        const res = {};
        res.json = jest.fn().mockResolvedValue({});
        return res;
    };

    const mockFetch = (returnValue, status = 200) => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: status >= 200 && status <= 299,
            status,
            json: jest.fn().mockResolvedValue(returnValue),
        });
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should handle a failed POST request and throw an error', async () => {
        const mockReq = mockRequest({
            name: 'John Doe',
            dob: '1990-01-01',
            country: 'USA',
        });

        const mockRes = mockResponse();

        const errorMessage = new Error(500);

        mockFetch({}, 500);

        await expect(POST(mockReq, mockRes)).rejects.toThrowError(errorMessage);
    });
});

describe('isMatching function', () => {
    it('should correctly determine if information matches', () => {
        const match = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        addresses: [
            {
            country: 'USA',
            },
        ],
        };

        const user = {
        fullName: 'John',
        dob: '1990',
        country: 'US',
        };

        const results = {
        fullName: false,
        dob: false,
        country: false,
        };

        const inputPath = 'fullName';
        const resultPath = 'fullName';

        isMatching(match, inputPath, resultPath, user, results);

        expect(results.fullName).toBe(true);
    });
});