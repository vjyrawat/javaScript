FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

# Ensure the vscode user exists
RUN id -u vscode &>/dev/null || useradd -ms /bin/bash vscode

# Set the user
USER vscode

# Set working directory
WORKDIR /workspace

# Install dependencies (adjust as needed)
RUN sudo apt-get update && sudo apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - \
    && sudo apt-get install -y nodejs

# Copy the rest of your application (adjust as needed)
COPY . .

# Run the application (adjust as needed)
CMD ["node", "test.js"]
