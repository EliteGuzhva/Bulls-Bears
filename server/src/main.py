import os
from .flask import create_app


if __name__ == '__main__':
    port = os.getenv("PORT", 5000)

    app = create_app()
    app.run(debug=False, host='0.0.0.0', port=port)

