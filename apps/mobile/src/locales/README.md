# Internationalization (i18n) Setup

This directory contains the translation files for the mobile app using react-i18next.

## Structure

```
src/
├── locales/
│   ├── en.json          # English translations
│   ├── fr.json          # French translations
│   └── README.md        # This file
├── lib/
│   └── i18n.ts          # i18n configuration
└── hooks/
    └── useTranslation.ts # Custom translation hook
```

## Usage

### Basic Translation

```tsx
import { useTranslation } from "~/hooks/useTranslation";

const MyComponent = () => {
    const { t } = useTranslation();

    return <Text>{t("common.welcome")}</Text>;
};
```

### Changing Language

```tsx
import { useTranslation } from "~/hooks/useTranslation";

const LanguageSettings = () => {
    const { changeLanguage, currentLanguage } = useTranslation();

    const handleLanguageChange = async () => {
        await changeLanguage("fr-FR");
    };

    return (
        <TouchableOpacity onPress={handleLanguageChange}>
            <Text>Switch to French</Text>
        </TouchableOpacity>
    );
};
```

### Translation with Parameters

```tsx
// In your translation file:
{
  "welcome": "Welcome, {{name}}!"
}

// In your component:
const { t } = useTranslation();
return <Text>{t('welcome', { name: 'John' })}</Text>;
```

## Supported Languages

- **English (en-US)**: Default fallback language
- **French (fr-FR)**: Primary language for the app

## Adding New Languages

1. Create a new JSON file in this directory (e.g., `es.json` for Spanish)
2. Copy the structure from `en.json` and translate all values
3. Update the `resources` object in `src/lib/i18n.ts`
4. Add the new language to the `SupportedLanguage` type in `src/utils/storage/storage.ts`
5. Update the `languages` array in `src/components/LanguageSelector.tsx`

## Translation Keys Structure

The translation keys are organized into logical groups:

- `common`: General UI elements (buttons, labels, etc.)
- `navigation`: Navigation-related text
- `wallet`: Wallet-specific terminology
- `portfolio`: Portfolio and trading terms
- `settings`: Settings screen text
- `auth`: Authentication-related text
- `errors`: Error messages

## Best Practices

1. **Use descriptive keys**: `wallet.totalBalance` instead of `total`
2. **Group related translations**: Keep similar functionality together
3. **Consistent naming**: Use camelCase for keys
4. **Avoid nesting too deep**: Maximum 2-3 levels
5. **Keep translations short**: Mobile screens have limited space
6. **Test with longest language**: Some languages are longer than others

## Storage Integration

The selected language is automatically saved to device storage using the existing storage system. The language preference persists across app restarts and is synchronized with the `DEFAULT_LANGUAGE` key in storage.

## Device Language Detection

The app automatically detects the device language on first launch and sets the appropriate language if supported. If the device language is not supported, it falls back to French (fr-FR).
