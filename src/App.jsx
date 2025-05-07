import './index.css';

function App() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold text-center text-gray-800">Вход</h2>
        <form class="mt-6 space-y-4">
          <div>
            <label class="block text-gray-600">Логин</label>
            <input
              type="text"
              placeholder="Введите логин"
              class="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-gray-600">Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              class="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="text-blue-500 rounded focus:ring-0" />
              <span class="ml-2 text-gray-600">Запомнить меня</span>
            </label>
            <a href="#" class="text-sm text-blue-500 hover:underline">Забыли пароль?</a>
          </div>
          <button
            type="submit"
            class="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Войти
          </button>
        </form>
      </div>
    </div>

  );
}

export default App;
